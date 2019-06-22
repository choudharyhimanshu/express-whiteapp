/**
 * Author: choudhary
 * Date: 16/6/19
 */

import {Mongoose} from 'mongoose';

let url;
if (process.env.MONGODB_CONNECTION_URL) {
    url = process.env.MONGODB_CONNECTION_URL;
} else {
    url = 'mongodb://mongo:27017/whiteapp';
}

const mongoose = new Mongoose();
mongoose.connect(url, {useNewUrlParser: true})
    .then(() => console.log('DB Connection successful.'))
    .catch(error => console.log(error));

export default mongoose;
