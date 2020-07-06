const controller = {};

controller.principal = (req, res) => {
    res.render('index');
};

controller.contact = (req, res) => {
    res.render('contact');
};

module.exports = controller;