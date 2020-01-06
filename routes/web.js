const express = require('express');
const homeRoutes = require("../controllers/homeController");
const conferencesRoutes = require("../controllers/conferenceController");

const router = express.Router();

router.get('/', homeRoutes.getHome);
router.get('/conference', conferencesRoutes.getAllconferences);
router.get('/conference/show/:id', conferencesRoutes.getConference);
router.get('/conference/edit/:id', conferencesRoutes.getEditConference);
router.post('/conference/update/:id', conferencesRoutes.postUpdateConference);
router.get('/conference/destroy/:id', conferencesRoutes.getDestroyConference);
router.get('/conference/add', conferencesRoutes.getAddConference);
router.post('/conference/add', conferencesRoutes.postStoreConference);

module.exports = router;