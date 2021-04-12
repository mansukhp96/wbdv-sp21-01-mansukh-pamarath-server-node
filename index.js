import express from 'express';
import cors from 'cors';
import userRoutes from './routes/user-routes.js'
const app = express();
app.use(cors());
const PORT = 4000;

app.use('/api/users', userRoutes);

app.listen(PORT, () => console.log("Node Server started on port: " + PORT));