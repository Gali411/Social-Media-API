import { Router } from 'express';
const router = Router();
//import userRoutes from './userRoutes.js';
import thoughtRoutes from './thoughtRoutes.js';
//router.use('/posts', userRoutes);
router.use('/comments', thoughtRoutes);
export default router;
