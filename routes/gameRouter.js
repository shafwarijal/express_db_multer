import { Router } from 'express';
import gameController from '../controllers/gameController.js';

const router = Router();

router.post('/', gameController.addGame);
router.get('/', gameController.getAllGames);
router.get('/:name', gameController.getGameByName);
router.delete('/:name', gameController.deleteGame);
router.put('/:name', gameController.editGame);

export default router;
