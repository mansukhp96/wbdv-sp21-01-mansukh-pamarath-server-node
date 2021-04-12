import express from 'express';
import cors from 'cors';
import quizRoutes from './routes/quiz-routes.js'
const app = express();
app.use(cors());
const PORT = 4000;

app.use('/api/quizzes', quizRoutes);

app.listen(PORT, () => console.log("Node Server started on port: " + PORT));