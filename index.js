import express from 'express';

const app = express();
const port = 3000;

app.listen(port, () =>
  console.log('Paper Generation App listening on port 3000!'),
);