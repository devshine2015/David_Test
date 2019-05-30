import axios from 'axios';

const client = axios.create({
  baseURL: 'http://localhost:3000',
});


export const fetchDataService = (url, headers) => client.get(
  url, {
    headers: {
        ...headers,
        'Cache-Control': 'no-cache, no-store, must-revalidate',
        'Pragma': 'no-cache',
        'Expires': 0
    },
  },
)
  .then(response => response)
  .catch(err => err);

export const postDataService = (url, item, headers) => client.post(url, item, {
  headers: {
    Accept: '*/*',
    'Content-Type': 'application/json',
    'Access-Control-Allow-Methods': 'POST',
    ...headers,
  },
})
  .then(response => response)
  .catch(err => err);

export const updateDataService = (url, item, headers) => client.patch(url, item, {
  headers: {
    Accept: '*/*',
    'Content-Type': 'application/json',
    'Access-Control-Allow-Methods': 'PUT',
    ...headers,
  },
})
  .then(response => response)
  .catch(err => err);

  export const deleteDataService = (url, headers) => client.get(
    url, {
      headers: {
        Accept: '*',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Methods': 'DELETE',
        ...headers,
      },
    },
  )
    .then(response => response)
.catch(err => err);