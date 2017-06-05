import API_URL from '../config';

export const GET = 'GET';
export const POST = 'POST';
export const PUT = 'PUT';
export const DELETE = 'DELETE';
export const PATCH = 'PATCH';

class Network {
  static request(type = GET, path = '', params = null, headers = null) {
    return new Promise((resolve, reject) => {
      // Checking the request type
      if (type !== GET && type !== POST && type !== PUT && type !== DELETE && type !== PATCH) {
        reject('Wrong type');
      }
      // Setting final endpoint
      let ENDPOINT = `${API_URL}/${path}`;

      const data = {
        method: type,
        headers: {
          'Content-Type': 'application/json',
        },
      };
      // Adding params
      if (params !== null && type !== GET) {
        data.body = JSON.stringify(params);
      } else if (params !== null && type === GET) {
        ENDPOINT = `${ENDPOINT}?${Network.getQueryString(params)}`;
      }
      // Adding headers
      if (headers !== null) {
        data.headers = Object.assign(data.headers, headers);
      }

      console.info(`FETCHING: ${ENDPOINT}`);
      console.info('SEND DATA:', data);
      fetch(ENDPOINT, data)
        .then(response => response.json())
        .then((responseJson) => {
          console.info('RESPONSE:', responseJson);
          resolve(responseJson);
        })
        .catch((error) => {
          console.info('ERROR ON FETCH:', error);
          reject(error);
        });
    });
  }

  static getQueryString(params) {
    const esc = encodeURIComponent;
    return Object.keys(params)
      .map(k => `${esc(k)}=${esc(params[k])}`)
      .join('&');
  }
}

export default Network;
