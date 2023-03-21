import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import routes from './routes/index.js';
import model from './models/index.js';

const app = express();
//to pass JSON body
app.use(express.json());
//to encode URLs
app.use(express.urlencoded());
//accept req from differrent domain
app.use(cors());
routes(app);

mongoose.connect('mongodb://localhost:27017/Tododb').then(() => {console.log("connected")});

export default app;