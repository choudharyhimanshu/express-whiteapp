/**
 * Author: choudhary
 * Date: 17/6/19
 */

import User, {IUser} from '../model/user';

export class UserService {

    async getAllUsers(page: number, limit: number): Promise<IUser[]> {
        let options = {
            limit,
            page
        };

        return new Promise<IUser[]>((resolve, reject) => {
            User.find({}, {'_id': 0}, options, (error, users) => {
                if (error) {
                    reject(error);
                }
                resolve(users);
            });
        });
    }

    async createUser(user: IUser): Promise<IUser> {
        return new Promise<IUser>((resolve, reject) => {
            User.create(user).then(user => {
                resolve(user);
            }).catch(error => {
                reject(error);
            });
        });
    }

}