import mongoose from 'mongoose';

// schema for DB
const schema = new mongoose.Schema({
    
    title:{
        type: String,
        required: "Title is a required field"
    },
    description:{
        type: String,
        required: "Description is a required field"

    },
    createdDate:{
        type: Date,
        default: Date.now()
        

    },
    lastModifiedDate:{
        type: Date,
        default: Date.now()

    },
    date:{
        type: String,
        required: "Date is a required field"
    },
    time:{
        type: String,
        required: "Time is a required field"
    },
    status:{
        type: Number,
        required: "Status is a required field"
    }
},{versionKey: false})
const model = mongoose.model('Todo',schema);
export default model;