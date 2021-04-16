// For now its the same
const API_SERVER_URL = process.env.NODE_ENV === 'production' ? 'https://api.conta.ai' : 'https://api.conta.ai';

export const GET_CONTRACTS_ENDPOINT = `${API_SERVER_URL}/contracts/`;

export const GET_PARAGRAPHS_ENDPOINT = `${API_SERVER_URL}/contract/`;

export const GET_USERS_ENDPOINT = `${API_SERVER_URL}/users`;
