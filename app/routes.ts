import { Application } from 'express';
import { healthCheck } from './controllers/health_check';
import { getUsers } from './controllers/users';

export const init = (app: Application): void => {
  /* health */
  app.get('/health', healthCheck);

  /*  */
  app.get('/', (req, res) => {
    res.status(200).send({ message: 'Hello World' });
  });

  /* users  */
  app.get('/users', getUsers);
};
