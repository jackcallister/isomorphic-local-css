import axios from 'axios';

function createRemoteBook() {
  return axios.get('/api')
              .then((response) => { return response.data })
              .catch((error) => { return error });
}

export {
  createRemoteBook
}
