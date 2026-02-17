import express from 'express';
import { 
  createTask, 
  getTasks, 
  getTasksByStatus, 
  updateTask, 
  deleteTask 
} from '../controllers/task.mjs';
import { protect } from '../middlewares/auth.mjs';

const router = express.Router();

router.post('/', protect, createTask);
router.get('/', protect, getTasks);
router.get('/status/:status', protect, getTasksByStatus);
router.put('/:id', protect, updateTask);
router.delete('/:id', protect, deleteTask);

export default router;
