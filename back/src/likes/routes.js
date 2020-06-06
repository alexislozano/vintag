module.exports = function(app) {
    let controller = require('./controller');

    app.route('/likes')
        .post(controller.create)

    app.route('/likes/:user_name/:product_name')
        .delete(controller.delete);
};
