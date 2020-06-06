module.exports = function(app) {
    let controller = require('./controller');

    app.route('/auth/signin')
        .post(controller.signin);

    app.route('/auth/signup')
        .post(controller.signup);
};
