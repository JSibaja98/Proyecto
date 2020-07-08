const controller = {};

controller.login = (req, res) => {
    const datos = req.body;
    req.getConnection((err, conn) => {
        conn.query('Select * from usuarios where nombre = ? and password = ?', [datos.nombre, datos.password], (err, usuario) => {
            if (err) {
                res.send(err);
            }
            console.log(usuario[0]);
            if (usuario[0] == null) {
                console.log('No registrado');
                res.redirect('/');
            } else {
                res.end()
                console.log('esta registrado');
                res.redirect('/adminRegCartelera');
            }

        });
    });
};

module.exports = controller;