import axios from 'axios';
import { GET_CONTRACTS_ENDPOINT, GET_PARAGRAPHS_ENDPOINT } from './config';
import { IContractDTO } from './types/IContracts';
import { IParagraphDTO } from './types/IParagraphs';

export const getContractsRequest = (uuid: string): Promise<{ data: { contracts: IContractDTO[] } }> =>
  axios.get(`${GET_CONTRACTS_ENDPOINT}${uuid}`, {
    headers: {
      'content-type': 'application/json',
    },
  });

export const getParagraphsRequest = (uuid: string): Promise<{ data: { paragraphs: IParagraphDTO[] } }> =>
  axios.get(`${GET_PARAGRAPHS_ENDPOINT}${uuid}`, {
    headers: {
      'content-type': 'application/json',
    },
  });
