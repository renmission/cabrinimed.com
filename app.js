const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const cookieParser = require('cookie-parser')
const session = require('express-session');
const methodOverride = require('method-override');
const flash = require('connect-flash');



// Passport Auth
const passport = require('passport');
require('./config/passport')(passport);

// app init
const app = express();

// DB connection
const db = require('./config/db');



// test db
db.sequelize.authenticate()
    .then(() => console.log('DB connected...'))
    .catch(err => console.log('Server Error: ' + err))



app.use(methodOverride('_method'));

app.use(cookieParser());

// session
app.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true
}));

app.use(passport.initialize());
app.use(passport.session());

// flash message
app.use(flash());
// global messages
app.use((req, res, next) => {
    res.locals.success_msg = req.flash('success_msg');
    res.locals.error_msg = req.flash('error_msg');
    res.locals.error = req.flash('error');
    res.locals.user = req.user || null;
    next();
});
// express middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// static folder
app.use(express.static(path.join(__dirname, 'public')));

// template engine
const { stripTags, ensureAuthenticated, select } = require('./helpers/hbs-helpers');
app.engine('handlebars', exphbs({
    defaultLayout: 'home',
    helpers: { stripTags, ensureAuthenticated, select }
}));
app.set('view engine', 'handlebars');

// Init routes
app.use('/', require('./routes/home'));
app.use('/', require('./routes/home/services'));
app.use('/auth', require('./routes/auth'));
app.use('/admin', require('./routes/admin'));
app.use('/admin', require('./routes/admin/healthAccess'));
app.use('/admin', require('./routes/admin/news'));
app.use('/admin', require('./routes/admin/services'));


const port = process.env.PORT || 5000;
app.listen(port, console.log(`Server start on port ${port}...`));