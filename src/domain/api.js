import config from '@config/index';
import { merge } from 'lodash';

import request from '@utils/request';

const urls = {
  ping: 'ping.json',
  users: 'users',
  vaksin:'vaksin'
};

export const callAPI = async (endpoint, method, header = {}, params = {}, data = {}) => {
  const defaultHeader = {
    'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
  };

  const headers = merge(defaultHeader, header);
  const options = {
    url: config.api.host + endpoint,
    method,
    headers,
    data,
    params,
  };

  return request(options).then((response) => {
    const responseAPI = response.data;
    return responseAPI;
  });
};

// ADD VAKSIN
export const createUserData = (userData) => {
  return callAPI(urls.vaksin, 'POST', {}, {}, userData)
}

export const ping = () => callAPI(urls.ping, 'get');

export const fetchAllVaksin = () => {
  return callAPI(urls.vaksin, 'GET');
};

export const fetchVaksinByID = (id) => {
  return callAPI(`${urls.vaksin}/${id}`, 'GET');
};

export const deleteVaksinByID = (id) => {
  return callAPI(`${urls.vaksin}/${id}`, 'DELETE');
};

export const updateVaksinStatusByID = (id, updatedStatus) => {
  const endpoint = `${urls.vaksin}/${id}`;
  console.log(endpoint, '<<<<<<< ENDPOINT')
  const method = 'PUT';
  const header = {
    'Content-Type': 'application/json',
  };
  // const data = {
  //   status: updatedStatus,
  // };

  // try {
    const response = callAPI(endpoint, method, header, {}, updatedStatus);
    return response;
  // } catch (error) {
  //   throw error;
  // }
};
// USER
export const getAllUser = () => {
  return callAPI(urls.users, "GET")
}
export const createUser = (dataUser) => {
  return callAPI(urls.users, "POST", {}, {}, dataUser)
}
export const getUserByEmail = (email) => {
  return callAPI(`${urls.users}?email=${email}`, "GET")
}
