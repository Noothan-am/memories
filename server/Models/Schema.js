import mongoose from "mongoose";

const postSchema = mongoose.Schema({
    title: String,
    message: String,
    creator:String,
    tags: [String],
    selectedFile: String,
    likes:{
        type:Number,
        default:0
    },
    date:{
        type:String,
        default: new Date.now()
    }
    })

mongoose.model('postMessage',postSchema);

export default postSchema;
