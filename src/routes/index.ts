import { Router, Request, Response } from 'express';

const router = Router();

router.get('/', (req: Request, res: Response) => {
    console.log('in router');
    res.render('index');
});

export default router;