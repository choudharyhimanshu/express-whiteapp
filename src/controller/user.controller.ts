/**
 * Author: choudhary
 * Date: 17/6/19
 */
import {Request, Response} from 'express';
import {UserService} from '../service/user.service';
import {DB_RESULTS_LIMIT} from '../constants';
import User, {IUser} from '../model/user';

import fakerStatic from 'faker';

class UserController {

    private userService: UserService;

    constructor() {
        this.userService = new UserService();
    }

    public index(request: Request, response: Response) {
        this.userService.getAllUsers(0, DB_RESULTS_LIMIT).then(users => {
           response.json(users);
        }).catch(error => {
            response.json(error);
        });
    }

    public register(request: Request, response: Response) {
        const user: IUser = new User({
            email: fakerStatic.internet.email(),
            firstName: fakerStatic.name.firstName(),
            lastName: fakerStatic.name.lastName()
        });
        this.userService.createUser(user).then(user => {
            response.json(user);
        }).catch(error => {
            response.json(error);
        });
    }

}

export default new UserController();
