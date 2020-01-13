const express = require('express');
const homeController = require("../controllers/homeController");
const conferencesController = require("../controllers/conferenceController");
const locationsController = require("../controllers/locationController");
const roomsController = require("../controllers/roomController");

const router = express.Router();

// Home
router.get('/', homeController.getHome);

// Conference
router.get('/conference', conferencesController.getAllconferences);
router.get('/conference/show/:id', conferencesController.getConference);
router.get('/conference/edit/:id', conferencesController.getEditConference);
router.post('/conference/update/:id', conferencesController.postUpdateConference);
router.post('/conference/destroy/:id', conferencesController.postDestroyConference);
router.get('/conference/create', conferencesController.getAddConference);
router.post('/conference/store', conferencesController.postStoreConference);

// Location
router.get('/location', locationsController.getAllLocations);

// Room
router.get('/room', roomsController.getAllRooms);

module.exports = router;