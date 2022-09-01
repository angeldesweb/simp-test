import { createSimpson, deleteSimpson, getSimpsons, getSimpson , updateSimpson } from '../controllers/simpsons';
import { Router } from 'express';

export const api = Router();

api.get('/',(req,res) => {
    return res.status(200).send({message:'runnig'})
}) 

api.post('/create-simpson',createSimpson);
api.get('/list-simpsons',getSimpsons);
api.get('/get-simpson/:id',getSimpson);
api.put('/update-simpson/:id',updateSimpson);
api.delete('/delete-simpson/:id',deleteSimpson)