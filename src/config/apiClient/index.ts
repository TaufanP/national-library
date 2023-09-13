import axios from 'axios';

export interface ApiHelper {
  delete: (url: string) => Promise<any>;
  get: (url: string) => Promise<{data: any}>;
  patch: (url: string, data: any) => Promise<any>;
  post: (url: string, data: any) => Promise<any>;
}

const baseURL = 'http://192.168.1.16:3005';

const axiosInstance = axios.create({baseURL});

export const axiosHelper: ApiHelper = {
  async delete(url) {
    return await axiosInstance.delete(url);
  },
  async get(url) {
    return await axiosInstance.get(url);
  },
  async patch(url, data) {
    return await axiosInstance.patch(url, data);
  },
  async post(url, data) {
    return await axiosInstance.post(url, data);
  },
};

export const fetchHelper: ApiHelper = {
  async delete(url) {
    return await fetch(`${baseURL}${url}`, {method: 'DELETE'});
  },
  async get(url) {
    const response = await fetch(`${baseURL}${url}`, {method: 'GET'});
    const result = {data: await response.json()};
    return result;
  },
  async patch(url, body) {
    return await fetch(`${baseURL}${url}`, {
      method: 'PATCH',
      body: JSON.stringify(body),
      headers: {
        'Content-Type': 'application/json',
      },
    });
  },
  async post(url, body) {
    return await fetch(`${baseURL}${url}`, {
      method: 'POST',
      body: JSON.stringify(body),
      headers: {
        'Content-Type': 'application/json',
      },
    });
  },
};
