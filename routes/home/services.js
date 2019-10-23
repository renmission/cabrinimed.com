const router = require('express').Router();
const Services = require('../../models/Services');


router.all('/*', (req, res, next) => {
    req.app.locals.layout = 'home';
    next();
});


// GET services
router.get('/services', (req, res) => {
    Services.findAll({ order: [['s_id', 'ASC']] })
        .then(services => {
            res.render('home/services', { services, title: 'Services | St. Cabrini' });
        })
});

// GET service by ID
router.get('/services/offer/:s_slug', (req, res) => {
    Services.findOne({ where: { s_slug: req.params.s_slug } })
        .then(service => {
            res.render('home/services/offer', { service, title: `${service.s_header} | St. Cabrini` })
        })
});



module.exports = router;