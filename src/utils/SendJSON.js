import Config from '../config';

const {API_URL} = Config;

function secureFetch(type, body = '') {
  if (type === 'GET' || type === 'DELETE') {
    return {
      method: type,
      "headers": {
        "x-rapidapi-key": "dc96997c8bmsh36ee698591d2a0fp194d7ejsn756e54d34f3d",
        "x-rapidapi-host": "news67.p.rapidapi.com"
      }
    };
  } else {
    return {
      method: type,
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(body),
    };
  }
}

export function securePost(path, body) {
  return fetch(`${API_URL}/${path}`, secureFetch('POST', body)).then((res) => {
    return res.json();
  });
}

// export function securePut(path, body) {
//   return fetch(`${API_URL}/${path}`, secureFetch('PUT', body)).then(res =>
//     res.json(),
//   );
// }

export function secureGet(path) {
  return fetch(`${API_URL}/${path}`, secureFetch('GET')).then((res) => {
    return res.json();
  });
}

// export function secureDelete(path) {
//   return fetch(`${API_URL}/${path}`, secureFetch('DELETE')).then(res =>
//     res.json(),
//   );
// }
