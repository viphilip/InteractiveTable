import express, { RequestHandler } from 'express';
import { getTable, initTable, updateCell } from '../controllers/table.controller';

const router = express.Router();

router.get('/', getTable as RequestHandler);
router.get('/init', initTable as RequestHandler);
router.post('/', updateCell as RequestHandler)

export default router;