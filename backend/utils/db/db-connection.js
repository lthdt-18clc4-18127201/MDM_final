import mongoose from 'mongoose';

const connection = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log('MongoDB Conneted');
    } catch (error) {
        console.log('MongoDB Connection Faild');
    }
}

export default connection;