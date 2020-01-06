const express = require('express');
const homeController = require("../controllers/homeController");
const conferencesController = require("../controllers/conferenceController");

const router = express.Router();

router.get('/', homeController.getHome);
router.get('/conference', conferencesController.getAllconferences);
router.get('/conference/show/:id', conferencesController.getConference);
router.get('/conference/edit/:id', conferencesController.getEditConference);
router.post('/conference/update/:id', conferencesController.postUpdateConference);
router.get('/conference/destroy/:id', conferencesController.getDestroyConference);
router.get('/conference/add', conferencesController.getAddConference);
router.post('/conference/add', conferencesController.postStoreConference);

module.exports = router;