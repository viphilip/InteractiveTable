import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import tableRoutes from './routes/table.routes';

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use('/table', tableRoutes);

export default app;