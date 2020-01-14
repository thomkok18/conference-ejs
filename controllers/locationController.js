const models = require("../models");

exports.getAllLocations = (req, res, next) => {
    models.Location.findAll().then(locations => {
        console.log(locations);
        res.render('locations/index', {
            locations: locations
        });
    }).catch(err => {
        console.log(err);
    });
};