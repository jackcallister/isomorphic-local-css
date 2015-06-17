import express from 'express';
import path from 'path';
import render from './utils/render';

const app = express();
const port = process.env.PORT || 4000;

app.set('views', 'server/views/');
app.set('view engine', 'ejs');

app.use('/scripts', express.static(path.join(__dirname, '../build/scripts')));

app.use('/', (req, res) => {
  render(res, {}, req.originalUrl);
});

app.listen(port, () => {
  console.log('listening on *:' + port);
});
