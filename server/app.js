import express from 'express';
import path from 'path';
import render from './utils/render';

const app = express();
const port = process.env.PORT || 4000;

app.set('views', 'server/views/');
app.set('view engine', 'ejs');

app.use('/scripts', express.static(path.join(__dirname, '../build/scripts')));

const data = {
  books: [
    { id: 1, title: 'Game of Thrones' }
  ]
};

app.use('/favicon.ico', (req, res) => {
  return;
});

app.use('/', (req, res) => {
  render(req, res, data);
});

app.listen(port, () => {
  console.log('listening on *:' + port);
});
