import express from 'express';
import {findAllQuizzes} from '../services/quiz-service.js';

const router = express.Router();

router.get("/all", findAllQuizzes);

export default router;