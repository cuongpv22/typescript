import  {UserModel}  from './../models/User'
import { format } from 'date-and-time';
import { sign, verify } from 'jsonwebtoken';
import { statusCode } from './../utils/StatusCode';
import { constUtil } from './../utils/ConstUtil';
import UserDAO from '../processors/UserProcessor';
import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

class AppController {
    constructor() {
    }
    
    refreshToken(req, res) {
        const refreshToken = req.body.refreshToken;
        verify(refreshToken, constUtil.hasKey, (err, decode) => {
            if (err) {
                return res.status(401).json({
                    apiCode: statusCode.generalError,
                    message: 'Invalid refreshed token'
                });
            }
            else if (decode.appKey === constUtil.appKey && decode.code) {
                const token = sign({
                    refreshToken: refreshToken,
                    email: decode.email,
                    code: decode.code, createdDate: format(new Date(),
                        constUtil.defaultDateFormat)
                }, constUtil.hasKey
                )
                return res.json({
                    apiCode: statusCode.success,
                    refreshToken: refreshToken,
                    token: token
                });
            } else {
                return res.status(401).json({
                    apiCode: statusCode.generalError,
                    message: 'Invalid token'
                });
            }
        });
    };
    
    addUser = (req,res) => {
        
        //validate req
        req.checkBody('email', 'email cannot be empty').notEmpty();
        req.checkBody('password', 'password is required').exists();
        // check for errors!
        var errors = req.validationErrors();
        if (errors) {
            return res.status(422).send(errors);
        }
        //
        const newUser = new UserModel({
            _id: new mongoose.Types.ObjectId(),
            email: req.body.email,
            password: req.body.password
          });
          console.log(newUser);
        newUser.password = bcrypt.hashSync(req.body.password, 10);
        var data = newUser.save();  
        data.then(function (result) {
            return res.json({ appCode: statusCode.success, data: result });
        }).catch(function (err) {
            return res.status(400).send({
                message: err.message
            });
        }); 
     }
    login(req, res) {
        console.log("Login : " + req.body.email);
        // validation
        req.checkBody('email', 'email cannot be empty').notEmpty();
        req.checkBody('password', 'password is required').exists();
        // check for errors!
        var errors = req.validationErrors();
        if (errors) {
            return res.status(422).send(errors);
        }
        console.log("Login : " + req.body.email);
        var userDao = new UserDAO(UserModel);
        //Lookup user
        var user = userDao.getByEmail(req.body.email);
                
        //let user = this.getUserByEmail(req.body.email);
       
        user.then(user => {
            if(user === null ) {
                    return res.status(401).json({
                    apiCode: statusCode.generalError,
                    message: "Invalid email or password"
                  });
            }
            if (user) {
                console.log("Check pass !!!!!!");
                if (bcrypt.compareSync(req.body.password, user.password) === true) {

                    const refreshToken = sign({ email: user.email, appKey: constUtil.appKey }, constUtil.hasKey);
                    const token = sign({
                        refreshToken: refreshToken,            
                        email: user.email,
                        createdDate: format(new Date(),
                            constUtil.defaultDateFormat)
                    }, constUtil.hasKey
                    )
                    return res.json({
                        apiCode: statusCode.success,
                        refreshToken: refreshToken,
                        token: token,
                        data: user
                    });
                }
                else {
                    return res.status(401).send({
                        apiCode: statusCode.generalError,
                        message: "Invalid email or password"
                    });
                }
            } else {
                return res.status(401).send({
                    apiCode: statusCode.generalError,
                    message: "Invalid email or password"
                });
            }
        }).catch(_ => {
            return res.status(400).send({
                apiCode: statusCode.generalError,
                message: "Cannot login"
            });
        });
    };     
   
}

export const appController = new AppController();