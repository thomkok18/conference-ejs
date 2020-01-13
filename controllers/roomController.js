const Room = require('../models/room');

exports.getAllRooms = (req, res, next) => {
    Room.findAll().then(rooms => {
        console.log(rooms);
        res.render('rooms/index', {
            rooms: rooms
        });
    }).catch(err => {
        console.log(err);
    });
};