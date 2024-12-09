import { Router } from 'express';
import { getThoughts, getSingleThought, createThought, updateThought, deleteThought, AddReact, deleteReact } from '../../controllers/thoughtController.js';
const router = Router();
router.route('/').get(getThoughts).post(createThought);
router.route('/:thoughtId').get(getSingleThought).put(updateThought).delete(deleteThought);
router.route('/:thoughtId/reactions').post(AddReact);
router.route('/:thoughtId/reactions/:ReactID').delete(deleteReact);
export default router;
