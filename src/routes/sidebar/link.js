const SidebarLinkRoute = require('express').Router();
const SidebarLinkController = require('../../controllers/sidebar/SidebarLinkController');

SidebarLinkRoute.get('/detail/:id', SidebarLinkController.detail);

module.exports = SidebarLinkRoute;
