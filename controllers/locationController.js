const Location = require('../models/location');

exports.getAllLocations = (req, res, next) => {
    Location.findAll().then(locations => {
        console.log(locations);
        res.render('locations/index', {
            locations: locations
        });
    }).catch(err => {
        console.log(err);
    });
};