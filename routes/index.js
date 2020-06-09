const express = require('express');
const router = express.Router();

const Joi = require('joi');
const tutorials = require("../controllers/tutorial.controller.js");


router.post("/", tutorials.create);



module.exports = router;
