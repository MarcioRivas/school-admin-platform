import axios from 'axios';

const axiosClient = axios.create({
  baseURL: 'backExample',
});

export const apiGet = (pathName: string) => {
  return axiosClient.get(pathName);
};

export const apiPost = (pathName: string) => {
  return axiosClient.post(pathName);
};

export const apiUpdate = (pathName: string) => {
  return axiosClient.patch(pathName);
};
