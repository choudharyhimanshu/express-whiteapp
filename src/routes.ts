/**
 * Author: choudhary
 * Date: 16/6/19
 */
import {Router} from 'express';

const router = Router();

router.route('/').get((request, response) => {
    response.json({
        status: 'OK',
        message: 'API up and running.'
    });
});

export default router;
