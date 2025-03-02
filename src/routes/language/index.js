const LanguageRoute = require('express').Router();
const LanguageController = require('../../controllers/language/LanguageController');

LanguageRoute.get('/list', LanguageController.getList);

module.exports = LanguageRoute;
