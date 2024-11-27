import dotenv from 'dotenv'
dotenv.config();
import express from 'express';
import router from './routes.js'
import cors from 'cors';

const app = express();
const PORT = 4000;

app.use(express.json());
app.use(cors());

app.use('/', router);

app.listen(PORT, () => {
 console.log(`Running messaging app for heron school students on port ${PORT}`)
});
