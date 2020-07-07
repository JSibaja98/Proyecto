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

controller.billboard = (req, res) => {
    res.render('billboard');
};

module.exports = controller;