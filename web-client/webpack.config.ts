import HtmlWebpackPlugin from 'html-webpack-plugin';
import path from 'path';
import { Configuration } from 'webpack';
import babelOptions from './babel.config';
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';
import TsconfigPathsPlugin from 'tsconfig-paths-webpack-plugin';
import SimpleProgressWebpackPlugin from 'simple-progress-webpack-plugin';
import Dotenv from 'dotenv-webpack';
import { version } from './package.json';
import dotenv from 'dotenv';

const ENV_FILE_PATH = '.env';
const { APP_BASE_PATH } = dotenv.config({ path: ENV_FILE_PATH }).parsed;

// clearing TS_NODE_PROJECT to prevent TsconfigPathsPlugin assuming this is the project's config
process.env.TS_NODE_PROJECT = '';

const IS_PRODUCTION = process.env.NODE_ENV === 'production';
const IS_DEV = !IS_PRODUCTION;

const tsConfigPath = path.join(__dirname, 'src', 'tsconfig.json');
const commitSha = process.env.CI_COMMIT_SHORT_SHA || 'LOCAL_BUILD';

if (IS_PRODUCTION) {
  console.log(`Building production build version "v${version} - ${commitSha}"`);
}

const plugins = [
  new ForkTsCheckerWebpackPlugin({
    typescript: {
      configFile: tsConfigPath,
    },
  }),
  new HtmlWebpackPlugin({
    template: 'index.html',
    templateParameters: {
      version: `${version} - ${commitSha}`,
      APP_BASE_PATH: APP_BASE_PATH ? `/${APP_BASE_PATH}` : '',
    },
  }),
  new Dotenv({ path: ENV_FILE_PATH }),
  new SimpleProgressWebpackPlugin({
    format: 'minimal',
  }),
];

// import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
// plugins.push(new BundleAnalyzerPlugin());

const nodeModulesPath = path.resolve(__dirname, 'node_modules');

if (IS_DEV) {
  (babelOptions.presets[0][1] as any).targets = { chrome: '79', firefox: '72' };
}

let publicPath = APP_BASE_PATH ? APP_BASE_PATH : '';
if (!publicPath.startsWith('/')) {
  publicPath = '/' + publicPath;
}
if (!publicPath.endsWith('/')) {
  publicPath = publicPath + '/';
}

const config: Configuration = {
  mode: IS_DEV ? 'development' : 'production',
  devtool: IS_DEV ? 'inline-source-map' : false,
  entry: ['./src/client'],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: `[name]-[hash:8]-bundle.js`,
    chunkFilename: '[name]-[hash:8]-bundle.js',
    publicPath,
  },
  resolve: {
    extensions: ['.js', '.ts', '.tsx'],
    plugins: [new TsconfigPathsPlugin({ configFile: tsConfigPath })],
  },
  optimization: {
    minimize: !IS_DEV,
    splitChunks: {
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all',
          priority: 10,
        },
        material: {
          test: /[\\/]node_modules[\\/]@material-ui[\\/]/,
          name: 'material-ui',
          chunks: 'all',
          priority: 20,
        },
      },
    },
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.tsx?$/,
        exclude: [/node_modules/, nodeModulesPath],
        use: {
          loader: 'babel-loader',
          options: babelOptions,
        },
      },
      {
        test: /.jpe?g$|.gif$|.png$|.svg$/,
        use: {
          loader: 'url-loader',
          options: { limit: 10000, outputPath: 'public/images' },
        },
      },
    ],
  },
  devServer: {
    overlay: IS_DEV,
    open: IS_DEV,
    openPage: APP_BASE_PATH,
    historyApiFallback: {
      index: APP_BASE_PATH,
    },
    port: 4200,
  },
  plugins,
};

export default config;
