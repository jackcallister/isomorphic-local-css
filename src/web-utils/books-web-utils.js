import axios from 'axios';

const createRemoteBook = () => {
  return axios.get('/api')
              .then((response) => { return response.data })
              .catch((error) => { return error });
}

export {
  createRemoteBook
}
