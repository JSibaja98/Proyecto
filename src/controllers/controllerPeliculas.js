const controller = {};

controller.add = (req, res) => {
    const datos = req.body;
    req.getConnection((err, conn) => {
        conn.query('Insert into peliculas set ?', [datos], (err, pelicula) => {
            if (err) {
                res.send(err);
            }
            res.redirect('/adminRegCartelera');
        })
    })
}

controller.list = (req, res) => {
    req.getConnection((err, conn) => {
        conn.query('Select * from peliculas', (err, peliculas) => {
            if (err) {
                res.send(err);
            }
            res.render('regPeliculas', {
                data: peliculas
            });
        });
    })
}

controller.listBillboard = (req, res) => {
    req.getConnection((err, conn) => {
        conn.query('Select * from peliculas', (err, peliculas) => {
            if (err) {
                res.send(err);
            }
            res.render('billboard', {
                data: peliculas
            });
        });
    })
}

module.exports = controller;