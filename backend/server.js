import 'dotenv/config.js'
import express from 'express';
import cors from 'cors';
import SiteRouter from './routes/site.route.js';
import connection from './utils/db/db-connection.js';

const app  = express();
const PORT = process.env.PORT || 8080;

app.use(cors());
app.use(express.json())

connection();

// Routes
app.use(SiteRouter);

app.listen(PORT, ()=>{
    console.log(`Server started on port ${PORT}`);
})