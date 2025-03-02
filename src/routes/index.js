const express = require('express');
const router = express.Router();

// Middleware
const { checkAppKey } = require('../middleware');

// Import các route con
const languageRoutes = require('./language/index');
const sidebarHeadingRoutes = require('./sidebar/heading');
const sidebarLinkRoutes = require('./sidebar/link');

// Ánh xạ route vào ứng dụng
router.use('/language', checkAppKey, languageRoutes);
router.use('/sidebar-heading', checkAppKey, sidebarHeadingRoutes);
router.use('/sidebar-link', checkAppKey, sidebarLinkRoutes);

module.exports = router;
