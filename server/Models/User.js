import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

const UserSchema = new mongoose.Schema({
    username:{
        type: String,
        required: true,
        unique: true
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    password:{
        type:String,
        required: true
    },
    xp:{
        type:Number,
        required: false,
        default: 0
    }
});

    UserSchema.pre('save', async function (next) {
        const user = this;
        if (user.isModified('password')) {
        user.password = await bcrypt.hash(user.password, 10);
        }
        next();
    });

const User = mongoose.model('User', UserSchema);

export default User;