var express = require('express');
var router = express.Router();

/* GET home page. */

// router.get('/', function (req, res, next) {
//     var loginData = {
//             isLogin: true,
//             user: {
//                 avatar: 'https://avatars1.githubusercontent.com/u/18721670?v=3&s=60.jpg',
//                 username: 'wangyi'
//             }
//         }
    
//     var notLogin = {
//     	isLogin: false

//     }
//     res.render('index', notLogin);
// });

router.get('/', function (req, res, next) {
    var loginData
    if (req.session.user) {
        loginData = {
            isLogin: true,
            user: {
                avatar: req.session.user.avatar,
                username: req.session.user.username
            }
        }
    } else {
        loginData = {
            isLogin: false
        }
    }
    res.render('index', loginData);
});

module.exports = router;
