import mongoose from "mongoose";

const TaskSchema = new mongoose.Schema({
    task:{
        type: String,
        required: true,
        unique: true
    },
    xp:{
        type:Number,
        required: false,
        default: 0
    },
    cardId:{
        type: String,
        required: true,
        unique: false
    },
    done:{
        type:Map,
        of:Boolean,
    }
});

const Task = mongoose.model('Task', TaskSchema);

export default Task;