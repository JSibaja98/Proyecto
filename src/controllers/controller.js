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

controller.about = (req, res) => {
    res.render('aboutUs');
};
controller.admin = (req, res) => {
    res.render('regPeliculas');
};
controller.deals = (req, res) => {
    res.render('deals');
};

module.exports = controller;