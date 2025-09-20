import cors from 'cors';
import express from 'express';
import morgan from 'morgan';

const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

export default app;