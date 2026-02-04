import mongoose from 'mongoose';

export const connectDB = async () => {
    try {
        await mongoose.connect(
            process.env.MONGODB_CONNECTIONSTRING
        );
        console.log("Successfully establishing connection with database!")
    } catch (error) {
        console.log("Error establishing connection with database:", error);
        process.exit(1);
    }
}