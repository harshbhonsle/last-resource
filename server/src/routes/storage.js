import { Router } from 'express';
import { getFile } from '../controllers/storage.js';

const router = Router();

router.get('/:subject/:exam/:fileName', getFile);

export { router as storageRoutes };