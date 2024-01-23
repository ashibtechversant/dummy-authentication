const express = require('express');
const dotenv = require('dotenv');
const { port } = require('../config/index');

const app = express();
dotenv.config();
dotenv.config({ path: '.env.local' });

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Entry route
app
  .route('/')
  .get((_, res) => {
    res.send('Welcome to initial page of express app');
  })
  .all((req, res) => {
    res.status(405).end(`Method ${req.method} not allowed`);
  });

// API routes
const authRouter = require('./routes/auth-routes');
const userRouter = require('./routes/user-routes');

app.use('/auth', authRouter);
app.use('/users', userRouter);

// Start the server
app.listen(port);
