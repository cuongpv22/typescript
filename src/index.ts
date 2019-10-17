import App from './app'
import database from './database'

//Start Server
database();
const app = new App();
app.start();