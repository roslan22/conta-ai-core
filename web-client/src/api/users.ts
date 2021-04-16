import axios from 'axios';
import { GET_USERS_ENDPOINT } from './config';
import { IUserDTO } from './types/IUser';

export const getUsersRequest = (): Promise<{ data: { users: IUserDTO[] } }> =>
  axios.get(GET_USERS_ENDPOINT, {
    headers: {
      'content-type': 'application/json',
    },
  });
