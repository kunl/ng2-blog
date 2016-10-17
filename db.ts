import { Mongoose } from 'mongoose';

let mongoose = new Mongoose();

const uri = 'mongodb://localhost/blog';

mongoose.connect(uri, (err) => {
    if(err) {
        console.log(err);
        console.log(err.message);
    } else {
        console.log('Connected to MongoDb')
    }
})

export default mongoose
