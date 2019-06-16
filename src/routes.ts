/**
 * Author: choudhary
 * Date: 16/6/19
 */
import {Router} from 'express';

import UserController from './controller/user.controller';

const router = Router();

router.route('/').get((request, response) => {
    response.json({
        status: 'OK',
        message: 'API up and running.'
    });
});

router.route('/users').get((req, res) => UserController.index(req, res));
router.route('/users/register').get((req, res) => UserController.register(req, res));

export default router;
