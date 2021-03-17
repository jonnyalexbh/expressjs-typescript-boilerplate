import express from 'express';
import * as routes from './app/routes';

const app = express();

routes.init(app);

app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});
