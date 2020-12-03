import express from 'express';
import returnMessage from './routes';

const app = express();

app.get('/', returnMessage);

app.listen(3333);