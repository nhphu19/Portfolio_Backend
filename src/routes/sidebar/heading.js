const SidebarHeadingRoute = require('express').Router();
const SidebarHeadingController = require('../../controllers/sidebar/SidebarHeadingController');

SidebarHeadingRoute.get('/list', SidebarHeadingController.getList);

module.exports = SidebarHeadingRoute;
