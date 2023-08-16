import { Router } from 'express';
import galeryController from '../controllers/galeryController.js';
import router from './gameRouter.js';
import upload from '../utils/multerUtil.js';

const routerGalery = Router();

routerGalery.get('/', galeryController.getAllGaleries);
routerGalery.post('/', upload.single('image'), galeryController.addGalery);

export default routerGalery;
