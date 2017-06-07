import express from 'express';

import apiRouter from './routers/apiRouter';

const app = express();

app.use('/api', apiRouter);

app.listen(3000, () => {
  console.log('Example app listening on port 3000');
});
