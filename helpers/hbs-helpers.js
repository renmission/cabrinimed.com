module.exports = {
    ensureAuthenticated: (req, res, next) => {
        if (req.isAuthenticated()) {
            return next();
        }

        req.flash('error_msg', 'Not Authorized');
        res.redirect('/auth');
    },
    stripTags: function (input) {
        return input.replace(/<(?:.|\n)*?>/gm, "");
    },
    select: function (selected, options) {
        return options.fn(this).replace(new RegExp(' value=\"' + selected + '\"'), '$&selected="selected"');
    }
}

