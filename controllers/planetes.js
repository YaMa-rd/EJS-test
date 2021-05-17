
const Planete = require('../models/planete');

exports.getPlanetes = (req, res, next) => {

    Planete.fetchAll((planetes) => {
        res.render('./pages/planetes', { planetes  : planetes});
    });
};

exports.getPlanete = (req, res, next) => {
    Planete.findById(req.params.id_planete, planete => {
        res.render('./pages/planete', {planete : planete });
    });
};