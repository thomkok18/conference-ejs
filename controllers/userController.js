const User = require('../models/User');
const dateFormat = require('dateformat');

exports.getAllusers = (req, res, next) => {
    // const users = ['Rudy', 'Mauro', 'Thom', 'Björn'];
    User.findAll().then(users => {
        console.log(users);
        res.render('users/index', {
            users: users
        });
    }).catch(err => {
        console.log(err);
    });
};

exports.getUser = (req, res, next) => {
    // const users = {
    //     'Rudy': {title: "Rudy B.", age: 34},
    //     'Mauro': {title: "mauro bertozzi", age: 20},
    //     'Thom': {title: "Thom Kok", age: 23},
    //     'Björn': {title: "Björn", age: 19}
    // };
    //
    // let user = {title: "not found"};
    //
    // if(users.hasOwnProperty(req.params.user)) {
    //     user = users[req.params.user];
    // }

    const id = req.params.id;

    User.findByPk(id).then(user => {
        res.render('users/show', {
            id: id,
            firstname: user.firstname,
            inserts: user.inserts,
            lastname: user.lastname,
            age: user.age,
            birthday: dateFormat(user.birthday, "dd-mm-yyyy")
        });
    }).catch(err => {
        console.log(err);
    });
};