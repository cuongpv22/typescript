import mongoose from 'mongoose';
import { compareSync } from 'bcrypt';

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    _id: mongoose.Schema.Types.ObjectId,
    email: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true 
    }
});

export const UserModel = mongoose.model('User', UserSchema);