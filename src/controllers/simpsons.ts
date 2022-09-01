import { Request , Response , NextFunction } from 'express';
import Simpson from '../models/Simpson';

export const createSimpson = async (req:Request,res:Response,next:NextFunction) => {
    try {
        const { body } = req;
        const simpson = new Simpson(body);
        const data = await simpson.save();
        return res.status(200).send({success:true,message:'Created',data})
    } catch (error) {
        next(error)
    }
}

export const getSimpson = async (req:Request,res:Response,next:NextFunction) => {
    try {
        const _id = req.params.id;
        const doc = await Simpson.findById(_id).populate('friends');
        if(!doc) return res.status(404).send({success:false,message:'Simpson not found'});
        return res.status(200).send({success:true,doc})
    } catch (error) {
        next(error);
    }
}

export const getSimpsons = async (req:Request,res:Response,next:NextFunction) => {
    try {
        const docs = await Simpson.find().populate('friends');
        if(docs.length === 0) return res.status(404).send({success:false,message:'Not entries found'})
        return res.status(200).send({success:true,docs})
    } catch (error) {
        next(error)
    }
}

export const updateSimpson = async (req:Request,res:Response,next:NextFunction) => {
    try {
        const _id = req.params.id;
        const update = req.body;
        const prev = await Simpson.findByIdAndUpdate(_id,{...update});
        return res.status(200).send({success:true,message:'Modified',prev,added:update})
    } catch (error) {
        next(error)
    }
}

export const deleteSimpson = async (req:Request,res:Response,next:NextFunction) => {
    try {
        const _id = req.params.id;
        const doc = await Simpson.findById(_id);
        if(!doc) return res.status(404).send({success:false,message:'Simpson not found'});
        const data = await doc.remove();
        return res.status(200).send({success:true,message:'Deleted',data});
    } catch (error) {
        next(error);
    }
}