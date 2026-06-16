// import mongoose from "mongoose";

// export const connectDB = async () => {
//     await mongoose.connect('mongodb+srv://meenakshithangadurai07_db_user:quizapp431@cluster0.iumjhrv.mongodb.net/QuizApp')
//     .then(() => {
//         console.log('Database Connected')
//     })
// }

import mongoose from "mongoose";

export const connectDB = async () => {
    //  Using the variable from your .env file
    await mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log('Database Connected')
    })
    .catch((err) => {
        console.error('Database connection failed:', err);
    });
}