import { Schema , model , Types } from 'mongoose';

interface ISimpson {
    name:string;
    occupation?:string;
    bio?:string;
    friends:Types.ObjectId[]
}

const Simpson = new Schema<ISimpson>({
    name:{type:String,required:true,unique:true},
    occupation:{type:String},
    bio:{type:String},
    friends:[{type:Schema.Types.ObjectId,ref:'Simpson'}]
});

export default model<ISimpson>('Simpson',Simpson);