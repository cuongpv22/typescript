<<<<<<< HEAD
import express from 'express';
import AppRoute from './src/routes/AppRoute';
import {constUtil} from './src/utils/ConstUtil'
import http from 'http';
import { urlencoded, json } from 'body-parser';
import expressValidator from 'express-validator';
import dotenv from 'dotenv';
import mongoose from 'mongoose';

const app = express();
const api = express.Router();

dotenv.config();
// mongoose connection
console.log(process.env.DB_URL);
mongoose.connect(process.env.DB_URL, { useNewUrlParser: true })
console.log(process.env.DB_URL);
app.use(urlencoded({ extended: true }));
app.use(json());
app.use(expressValidator());
//app.use(cors());
// JWT setup
app.use((req, res, next) => {
    console.log("in app " + req.body);
    if (constUtil.isSecured == true) {
        if (req.headers.appkey === constUtil.appKey) {
            if (req.headers && req.headers.authorization && req.headers.authorization.split(' ')[0] === constUtil.authorizationPrefix) {
                verify(req.headers.authorization.split(' ')[1], constUtil.hasKey, (err, decode) => {
                    if (err) {
                        req.refreshToken = undefined;
                    } else {
                        req.refreshToken = decode.refreshToken;
                        req.role = decode.role;
                        req.driverId = decode.driverId;
                        if (constUtil.tokenExpiredTime > 0) {
                            let now = new Date();
                            let createdDate = parse(decode.createdDate, constUtil.defaultDateFormat);
                            let expiredDate = addMinutes(createdDate, constUtil.tokenExpiredTime);
                            if (now > expiredDate) {
                                req.refreshToken = undefined;
                                return res.status(401).send({
                                    apiCode: statusCode.generalError,
                                    message: 'Token expired'
                                });
                            }
                        }
                        next();
                    }
                });
            } else {
                req.refreshToken = undefined;
                next();
            }
        }
    } else {
        next();
    }
});

app.use("/api", api);

AppRoute(api);
const server = http.createServer(app);
//app.get('/', (req, res) => res.send('Hello world'));
server.listen(3000, () => console.log(`server is running on port 3000`));
=======
const express = require('express');
const app = express();
app.get('/', (req, res) => res.send('Hello world'));
app.listen(3000, () => {
    console.log('My REST API running on port 3000');
});
>>>>>>> 5e1a9832f079e4244f11a3ae68096ad7f3d5074a
