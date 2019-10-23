const router = require('express').Router();
const Doctors = require('../../models/Doctors');


router.all('/*', (req, res, next) => {
    req.app.locals.layout = 'home';
    next();
});

// GET home page
router.get('/', (req, res) => {
    res.render('home');
});

// GET admission guidelines
router.get('/admission-guidelines', (req, res) => {
    res.render('home/patient-and-visitors/admission-guidelines');
});

// GET hmo-accreditation
router.get('/hmo-accreditation', (req, res) => {
    res.render('home/patient-and-visitors/hmo-accreditation');
});

// GET medical-records
router.get('/medical-records', (req, res) => {
    res.render('home/patient-and-visitors/medical-records');
});

// GET patient-rights-and-responsibilities
router.get('/patient-rights-and-responsibilities', (req, res) => {
    res.render('home/patient-and-visitors/patient-rights-and-responsibilities');
});

// GET avp
router.get('/avp', (req, res) => {
    res.render('home/patient-experience/avp');
});

// GET patient-testimonials
router.get('/patient-testimonials', (req, res) => {
    res.render('home/patient-experience/patient-testimonials');
});

// GET about us
router.get('/about-us', (req, res) => {
    res.render('home/about/about-us');
});

// GET accreditations
router.get('/accreditations', (req, res) => {
    res.render('home/about/accreditations');
});

// GET affiliates
router.get('/affiliates', (req, res) => {
    res.render('home/about/affiliates');
});

// GET awards
router.get('/awards', (req, res) => {
    res.render('home/about/awards');
});

// GET history
router.get('/history', (req, res) => {
    res.render('home/about/history');
});

// GET milestone
router.get('/milestone', (req, res) => {
    res.render('home/about/milestone');
});

// GET people
router.get('/people', (req, res) => {
    res.render('home/people');
});

// GET career
router.get('/career', (req, res) => {
    res.render('home/career');
});

// GET people
router.get('/contact', (req, res) => {
    res.render('home/contact');
});


// GET privacy statement
router.get('/sitemap', (req, res) => {
    res.render('home/sitemap');
});


// GET privacy statement
router.get('/privacy-statement', (req, res) => {
    res.render('home/privacy-statement');
});

const ClinicRoom = require('../../models/CliniRoom');
const Specialty = require('../../models/Specialty');

// ClinicRoom and Specialty
ClinicRoom.hasMany(Doctors);
Specialty.hasMany(Doctors);

// Doctors
Doctors.belongsTo(ClinicRoom);
Doctors.belongsTo(Specialty);

// GET find a doctor
router.get('/find-a-doctor', (req, res) => {
    Doctors.findAll({
        order: [['id_dCtrl', 'ASC']],
        include: [{
            association: [{
                ClinicRoom, as: 'lkup_doctor_clinic',
                Specialty, as: 'lkup_doctor_specialty',
            }]
        }]
    })
        .then(doctors => {
            res.render('home/findADoctor', { doctors, title: 'Find a Doctors | St. Cabrini' })
        })
});


module.exports = router;