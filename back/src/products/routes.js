module.exports = function(app) {
    let controller = require('./controller');

    app.route('/products')
        .get(controller.read);
};
