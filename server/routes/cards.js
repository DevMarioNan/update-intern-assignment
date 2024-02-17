import Express from 'express';
import authenticateToken from '../middlewares/authenticateToken.js';
import {
    getCards,
    createCard,
    getTasks
} from '../controllers/cards.js';

const router = Express.Router();

router.get('/', authenticateToken, getCards);

router.post('/', authenticateToken, createCard);

router.get('/:id', authenticateToken, getTasks);

export default router;