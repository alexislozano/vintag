module.exports = function(app) {
    let controller = require('./controller');

    app.route('/likes')
        .post(controller.create)
        .delete(controller.delete);
};
