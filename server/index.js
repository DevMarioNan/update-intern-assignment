//packages
import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors';
import bodyParser from 'body-parser';
import authenticateToken from './middleware/authenticateToken.js';

//import routes
import authRoutes from './routes/auth.js';
import cardsRoutes from './routes/cards.js';
import userRoutes from './routes/user.js';
import taskRoutes from './routes/task.js';


//configurations
const app = express();
const PORT = process.env.PORT || 3000;
dotenv.config();

//middlewares
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//routes
app.use('/auth',  authRoutes);
app.use('/', authenticateToken , cardsRoutes);
app.use('/user', authenticateToken, userRoutes);
app.use('/task', authenticateToken, taskRoutes);


mongoose.connect(process.env.DB_URL).then(() => {
    app.listen(PORT, () => {
        console.log(`Server is listening on port ${PORT}`);
    });
}).catch((err) => {
    console.log(err);
});