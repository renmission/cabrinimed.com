const router = require('express').Router();
const path = require('path');
const { ensureAuthenticated } = require('../../helpers/hbs-helpers')
const { servicesValidation } = require('../../validation');

// Models
const HealthAccess = require('../../models/HealthAccess');

// multer - upload
const { upload } = require('../../helpers/multer');

// default layout - ADMIN
router.all('/*', (req, res, next) => {
    req.app.locals.layout = 'admin';
    next();
});

// GET Health Access
router.get('/health-access', ensureAuthenticated, (req, res) => {
    HealthAccess.findAll({ order: [['ha_id', 'DESC']] })
        .then(has => {
            res.render('admin/health-access', { title: `Health Access | Admin | St. Cabrini`, has });
        })
        .catch(err => console.log(err))
});






module.exports = router;