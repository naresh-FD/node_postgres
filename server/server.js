require('dotenv').config();
const morgan = require('morgan');

const express = require('express');
const resRouter = require('./routes/restaurantRoutes');
const app = express();
app.use(express.json());
// app.use(morgan('dev'));
app.use((req, res, next) => {
  console.log('test Middleware');
  next();
});

app.use('/api/v1/restaurant', resRouter);

const port = process.env.PORT;
app.listen(port, () => {
  console.log(`server is up ${port}`);
});
