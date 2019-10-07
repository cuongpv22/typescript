import { UserModel } from '../models/User';
class UserDAO  {
    constructor() {
    }
    getByEmail = (email) => {
        return new Promise((resolve, reject) => {
            UserModel.findOne({
                email: email
            }).exec((err, user) => {
                if (err) {
                    reject(err);
                } else {
                    console.log("find user " + user);
                    resolve(user);
                }
            })
        })
    }
}
export default UserDAO;