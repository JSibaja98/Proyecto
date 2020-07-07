const controller = {};

controller.login = (req, res) => {
    const datos = req.body;
    req.getConnection((err, conn) => {
        conn.query('Select * from usuarios where nombre = ? and password = ?', [datos.nombre, datos.password], (err, usuario) => {
            if (err) {
                res.send(err);
            }
            if (usuario[0] == null) {
                res.redirect('/');
            } else {
                res.redirect('/contact');
            }

        });
    });
};

module.exports = controller;