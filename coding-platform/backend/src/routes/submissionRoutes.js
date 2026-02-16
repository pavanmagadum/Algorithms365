import { Router } from 'express';
import { runCode } from '../controllers/submissionController.js';
import { authMiddleware } from '../middlewares/authMiddleware.js';
import { asyncHandler } from '../utils/asyncHandler.js';

const router = Router();
router.post('/run', authMiddleware, asyncHandler(runCode));

export default router;
