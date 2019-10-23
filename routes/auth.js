const router = require('express').Router();
const passport = require('passport');
const bcrypt = require('bcryptjs');
const { registerValidation } = require('../validation');
const User = require('../models/User');

require('../config/passport')(passport);

router.all('/*', (req, res, next) => {
    req.app.locals.layout = 'auth';
    next();
});


// GET login
router.get('/', (req, res) => {
    res.render('auth/index', { title: 'Sign In | St. Cabrini' });
});

// POST login + passport user authenticate
router.post('/login', passport.authenticate('local', {
    successRedirect: '/admin',
    failureRedirect: '/auth',
    failureFlash: true
}));


// GET sign up
router.get('/signup', (req, res) => {
    res.render('auth/signup', { title: 'Sign Up | St. Cabrini' });
});

// POST sign up
router.post('/signup', async (req, res) => {
    let { name, email, password } = req.body;
    let errors = [];

    const { error } = registerValidation(req.body);

    if (error) {
        errors.push({ text: error.details[0].message })
    }

    if (errors.length > 0) {
        res.render('auth/signup', {
            layout: 'auth',
            errors: errors,
            name,
            email
        });
    } else {

        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(password, salt);

        User.create({
            name,
            email,
            password: hash
        })
            .then(() => {
                req.flash('success_msg', 'Registered, you can now login');
                res.redirect('/auth');
            })
            .catch(err => console.error(err))

    }

});

router.get('/logout', (req, res) => {
    req.logout();
    res.redirect('/auth');
});



module.exports = router;