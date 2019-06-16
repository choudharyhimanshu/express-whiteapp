/**
 * Author: choudhary
 * Date: 16/6/19
 */

import {Mongoose} from 'mongoose';

const config = {
    user: 'root',
    pass: '',
    host: 'localhost',
    port: '27017',
    database: 'whiteapp'
};

let url;
if (config.pass) {
    url = `mongodb://${config.user}:${config.pass}@${config.host}:${config.port}/${config.database}`;
} else {
    url = `mongodb://${config.host}:${config.port}/${config.database}`;
}

const mongoose = new Mongoose();
mongoose.connect(url, {useNewUrlParser: true})
    .then(() => console.log('DB Connection successful.'))
    .catch(error => console.log(error));

export default mongoose;
