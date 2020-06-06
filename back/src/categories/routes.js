module.exports = function(app) {
    let controller = require('./controller');

    app.route('/categories')
        .get(controller.read);
};
