const models = require("../models");

exports.getAllRooms = (req, res, next) => {
    models.Room.findAll().then(rooms => {
        console.log(rooms);
        res.render('rooms/index', {
            rooms: rooms
        });
    }).catch(err => {
        console.log(err);
    });
};