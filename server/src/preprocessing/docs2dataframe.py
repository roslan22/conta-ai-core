import argparse
from sentence_transformers import SentenceTransformer, util
import torch

VERSION = "10312020"

def docs_to_text(data_folder):
  docs = {}

  for file in os.listdir(data_folder):
    doc_text = docx2txt.process(os.path.join(data_folder, file))
    docs[file] = doc_text

  return docs


def run(data_folder):
  doc_by_file = docs_to_text(data_folder)
  print(doc_by_file.keys())
  df = pd.DataFrame.from_dict({'fname':doc_by_file.keys(), 'text':doc_by_file.values()})
  # Run names, \n etc elimination 

  return df

if __name__ == "__main__":
    print('VERSION: {:} {:}'.format(os.path.basename(sys.argv[0]), VERSION))

    parser = argparse.ArgumentParser(description="Creates new folds from current folds by dataset split")

    parser.add_argument(
        '--data_folder',
        type=lambda x: os.path.normpath(x) if os.path.isdir(x) else exec(
          'raise argparse.ArgumentTypeError("{:} folder does not exist")'.format(x)),
        required=False,
        #default="data/rental_contracts/uploaded",
        action='store',
        help='Data folder to load contracts')

    args = parser.parse_args(sys.argv[1:])

    run(data_folder=args.data_folder)