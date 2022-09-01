import * as env from 'dotenv';
import mongoose from 'mongoose';
import { app } from "./app";

env.config();

const port = process.env.PORT!;
const db = process.env.LOCAL_DB_URL!;

app.listen(port, () =>{
    console.log(`Server running at ${port}`)
    mongoose.connect(db,() => {
        console.log('DB connected');
    })
})