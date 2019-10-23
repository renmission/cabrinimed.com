const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcryptjs');
const User = require('../models/User');
const passport = require('passport');


passport.serializeUser((user, done) => {
    done(null, user.id);
});

// passport.deserializeUser((id, done) => {
//     User.findByPk(id, (err, user) => {
//         done(err, user);
//     })
// });

// from the user id, figure out who the user is...
passport.deserializeUser(function (userId, done) {
    User
        .findAll({ where: { id: userId } })
        .then(function (user) {
            done(null, user);
        }).catch(function (err) {
            done(err, null);
        });
});

module.exports = passport => {
    passport.use(new LocalStrategy({ usernameField: 'email' }, (email, password, done) => {

        User.findOne(
            { where: { email: email } })
            .then(user => {

                if (!user) return done(null, false, { message: 'No user found' });

                bcrypt.compare(password, user.password, (err, isMatch) => {
                    if (err) throw err;

                    if (isMatch) {
                        return done(null, user);
                    } else {
                        return done(null, false, { message: 'Password incorrect' });
                    }
                });

            });

    }));
}