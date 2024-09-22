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
        return res.json({ message: 'hello Shubham ji' })
        
    })
    app.use(expres.json());
    app.use(cors());
    app.use('/', apiRouter);

    app.get('/test',(req,res)=>{return res.json({name:'shubham',age:'122009'})})


    app.listen(PORT, (err) => {
        if (err) {
            return console.log("There is Error  ", err);
        }
        console.log(`Server Running...... at ${PORT} by ${pid}`);

    });

}



