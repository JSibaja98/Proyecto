const controller = {};

controller.principal = (req, res) => {
    res.render('index');
};

controller.contact = (req, res) => {
    res.render('contact');
};

controller.login = (req, res) => {
    res.render('login');
};

module.exports = controller;