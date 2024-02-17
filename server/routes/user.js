import Express from 'express';
import authenticateToken from '../middlewares/authenticateToken.js';
import {
    getUser
} from '../controllers/user.js';
const router = Express.Router();

router.get('/:id',authenticateToken, getUser);

export default router;