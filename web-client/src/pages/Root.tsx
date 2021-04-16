import { Notifications } from '@components';
import { CONTRACT_PAGE_ROUTE, LOGIN_PAGE_ROUTE, ME_PAGE_ROUTE } from '@constants';
import { Box, Loading, makeStyles, Sidebar } from '@foundation';
import { useUsersStore } from '@store';
import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import LoginPage from './LoginPage';

const ContractPage = React.lazy(() => import('./ContractPage'));
// const HomePage = React.lazy(() => import('./HomePage'));
const MePage = React.lazy(() => import('./MePage'));

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    overflow: 'hidden',
    height: '100vh',
  },
  pageLayout: {
    display: 'grid',
    gridTemplateColumns: '200px 1fr',
    overflow: 'hidden',
    height: '100vh',
  },
}));

export const Root: React.FC = () => {
  const classes = useStyles();

  const usersStore = useUsersStore();

  React.useEffect(() => {
    usersStore.init();
  }, []);

  return (
    <Box className={classes.root}>
      <Box className={classes.pageLayout}>
        <Notifications />
        <Sidebar />
        <React.Suspense fallback={<Loading />}>
          <Switch>
            <Redirect exact from='/' to={LOGIN_PAGE_ROUTE} />
            <Route path={LOGIN_PAGE_ROUTE} component={LoginPage} />
            {/* <Route path={`${HOME_PAGE_ROUTE}/:uuid`} component={HomePage} /> */}
            <Route path={`${ME_PAGE_ROUTE}/:uuid`} component={MePage} />
            <Route path={`${CONTRACT_PAGE_ROUTE}/:userUuid/:uuid`} exact component={ContractPage} />
            <Redirect from='*' to='/' />
          </Switch>
        </React.Suspense>
      </Box>
    </Box>
  );
};
