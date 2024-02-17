import mongoose from 'mongoose';

const CardSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true,
        unique: true
    },
    description:{
        type: String,
        required: false,
        unique: false
    },
    xp:{
        type:Number,
        required: false,
        default: 0
    },
});

const Card = mongoose.model('Card', CardSchema);

export default Card;