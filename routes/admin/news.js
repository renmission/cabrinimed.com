const router = require('express').Router();
const { ensureAuthenticated } = require('../../helpers/hbs-helpers')
const { servicesValidation } = require('../../validation');

// Models
const News = require('../../models/News');

// multer - upload
const { upload } = require('../../helpers/multer');

// default layout - ADMIN
router.all('/*', (req, res, next) => {
    req.app.locals.layout = 'admin';
    next();
});


// GET News
router.get('/news', ensureAuthenticated, (req, res) => {
    News.findAll({ order: [['nf_id', 'DESC']] })
        .then(news => {
            res.render('admin/news', { title: `News | Admin | St. Cabrini`, news });
        })
        .catch(err => console.log(err))
});






module.exports = router;