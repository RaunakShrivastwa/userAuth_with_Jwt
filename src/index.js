import expres from 'express';
import dotenv from 'dotenv';
import cluster from 'cluster';
import os from 'os';
import db from './config/mongodb.config.js';
import { pid } from 'process';
import apiRouter from './router/apiRouter.js';
import cors from 'cors';



if (cluster.isPrimary) {
    for (let i = 0; i < os.cpus().length; i++) {
        cluster.fork();
    }
} else {

    dotenv.config();
    const PORT = process.env.PORT;
    const app = expres();
    app.get('/hello', (req, res) => {
        return res.json({ message: 'hello Shubham' })
    })
    app.use(expres.json());
    const allowedOrigins = ['https://projects-shop.vercel.app']; // Replace with your React app's origin

    app.use(cors({
        origin: function (origin, callback) {
            if (!origin || allowedOrigins.indexOf(origin) !== -1) {
                callback(null, true);
            } else {
                callback(new Error('Not allowed by CORS'));
            }
        },
        credentials: true // Allow credentials like cookies or HTTP authentication headers
    }));
    app.use('/', apiRouter);


    app.listen(PORT, (err) => {
        if (err) {
            return console.log("There is Error  ", err);
        }
        console.log(`Server Running...... at ${PORT} by ${pid}`);

    });

}



