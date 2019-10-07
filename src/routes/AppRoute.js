
import { appController } from './../controller/AppController';

const AppRoute = (app) => {
    // login route
    app.route('/auth/login')
        .post(appController.login);

    // refresh token
    app.route('/adduser')
        .post(appController.addUser);
}

export default AppRoute;