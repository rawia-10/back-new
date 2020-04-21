var express = require('express');
var router = express.Router();
var psyController = require("../controllers/MedecinController")
var rdvController= require("../controllers/RdvController")
var security = require("../controllers/securityController")
var accessControl = require("../middleware/accessAuthorization")
var policyControl = require("../middleware/policyControl")
const upload = require('../tools/upload');
const uploadController = require('../controllers/uploadController');



router.post('/rdv/add',rdvController.addrdv)

router.get('/rdv/getall', rdvController.getAllRdv)
module.exports = router;