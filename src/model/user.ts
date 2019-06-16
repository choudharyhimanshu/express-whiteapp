import {Schema, Document} from 'mongoose';
import mongoose from '../db-connection';

export interface IUser extends Document {
    email: string;
    firstName: string;
    lastName: string;
}

const UserSchema: Schema = new Schema({
    email: { type: String, required: true, unique: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true }
}, {
    versionKey: false
});

export default mongoose.model<IUser>('user', UserSchema);
