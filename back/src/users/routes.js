module.exports = function(app) {
    let controller = require('./controller');

    app.route('/users/:name')
        .put(controller.update);
};
