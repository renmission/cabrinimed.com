const router = require('express').Router();
const path = require('path');
const { ensureAuthenticated } = require('../../helpers/hbs-helpers')
const { servicesValidation } = require('../../validation');

// Models
const Services = require('../../models/Services');
const News = require('../../models/News');
const HealthAccess = require('../../models/HealthAccess');

// multer - upload
const { upload } = require('../../helpers/multer');

// default layout - ADMIN
router.all('/*', (req, res, next) => {
    req.app.locals.layout = 'admin';
    next();
});

// GET Admin PAGE
router.get('/', ensureAuthenticated, (req, res) => {
    res.render('admin/index');
});






module.exports = router;