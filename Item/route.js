import express from 'express';
import { createItem, 
    updateItem, 
    getItemById, 
    getAllItem, 
    deleteItemById 
} from './controller';

const router = express.Router();

router.post('/create', async (req, res, next) => {
    try {
        await createItem(req.body);
        return res.status(200).send('success');
    } catch (error) {
        next(error);
    }
});

router.put('/update', async (req, res, next) => {
    try {
        await updateItem(req.body);
        return res.status(200).send('update');
    } catch (error) {
        next(error);
    }
});


router.get('/get/:id', async (req, res, next) => {
    try {
        const data = await getItemById(req.params.id);
        return res.status(200).send(data);
    } catch (error) {
        next(error);
    }
});

router.get('/get-all', async (req, res, next) => {
    try {
        const data = await getAllItem();
        return res.status(200).send(data);
    } catch (error) {
        next(error);
    }
});

router.delete('/delete/:id', async(req, res, next) => {
    try {
        await deleteItemById(req.params.id);
        return res.status(200).send('deleted');
    } catch (error) {
        next(error);
    }
});

export default router;