import { Router } from 'express';

const apiRouter = Router();

apiRouter.get('/users', (req, res) => {
  res.json({ foo: 'bar' });
});

export default apiRouter;
