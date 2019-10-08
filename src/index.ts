import App from './app'
import database from './src/database'

database();
const app = new App();
app.start();