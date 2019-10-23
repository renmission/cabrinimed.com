const Joi = require('@hapi/joi');

const registerValidation = (data) => {
    const schema = Joi.object({
        name: Joi.string().required(),
        email: Joi.string().required().email(),
        password: Joi.string().min(6).required(),
        password2: Joi.valid(Joi.ref('password')).required().label('Confirm Password')
    });
    return schema.validate(data);
}

const servicesValidation = (data) => {
    const schema = Joi.object({
        s_title: Joi.string().required().label("Title"),
        s_content: Joi.string().required().label("Content"),
    });
    return schema.validate(data);
}

module.exports.registerValidation = registerValidation;
module.exports.servicesValidation = servicesValidation;