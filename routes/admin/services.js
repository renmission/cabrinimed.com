const router = require('express').Router();
const path = require('path');
const { ensureAuthenticated } = require('../../helpers/hbs-helpers')
const { servicesValidation } = require('../../validation');

// Models
const Services = require('../../models/Services');

// multer - upload
const { upload } = require('../../helpers/multer');

// default layout - ADMIN
router.all('/*', (req, res, next) => {
    req.app.locals.layout = 'admin';
    next();
});

// GET Services
router.get('/services', ensureAuthenticated, (req, res) => {
    Services.findAll({ order: [['s_id', 'DESC']] })
        .then(services => {
            res.render('admin/services', { title: 'Services | Admin | St. Cabrini', services });
        })
        .catch(err => console.log(err))
});

// GET add services
router.get('/services/add', ensureAuthenticated, (req, res) => {
    res.render('admin/services/add', { title: 'Add Services' })
});

// POST Services
router.post('/services', ensureAuthenticated, upload, (req, res) => {
    let { s_title, s_header, s_content, s_status, s_keyword, s_description } = req.body;

    let s_Image = req.file.filename;
    let s_slug = "";

    let errors = [];

    if (errors.length > 0) {
        res.render('admin/services/add', {
            errors,
            s_title,
            s_header,
            s_content,
            s_keyword,
            s_description
        });
    } else {
        if (s_slug == "")
            s_slug = s_title.replace(/\s+/g, '-').toLowerCase();

        Services.create({
            s_title,
            s_header,
            s_slug,
            s_content,
            s_status,
            s_keyword,
            s_description,
            s_Image
        })
            .then(service => {
                req.flash('success_msg', 'Service added');
                res.redirect('/admin/services');
            })
            .catch(err => console.log(err))
    }
});

// GET services by id
router.get('/services/edit/:s_slug', ensureAuthenticated, (req, res) => {
    Services.findOne({ where: { s_slug: req.params.s_slug } })
        .then(service => {
            res.render('admin/services/edit', { service, title: 'Edit Services' })
        });
});

// POST/UPDATE services by id
router.put('/services/edit/:s_id', ensureAuthenticated, upload, (req, res) => {
    Services.findByPk(req.params.s_id)
        .then(service => {

            service.s_title = req.body.s_title;
            if (service.s_slug == "")
                service.s_slug = service.s_title.replace(/\s+/g, '-').toLowerCase();
            service.s_header = req.body.s_header;
            service.s_content = req.body.s_content;
            service.s_status = req.body.s_status;
            service.s_keyword = req.body.s_keyword;
            service.s_description = req.body.s_description;
            service.s_Image = req.file.filename;

            service.save()
                .then(updateService => {
                    req.flash('success_msg', 'Services Updated');
                    res.redirect('/admin/services');
                })
        })
        .catch(err => console.log(err))
});

// DELETE services by id
router.delete('/services/:s_id', (req, res) => {
    Services.findByPk(req.params.s_id)
        .then(service => {
            service.destroy().then(deleteService => {
                req.flash('success_msg', 'Service deleted');
                res.redirect('/admin/services');
            })
        })
        .catch(err => console.log(err))
});




module.exports = router;