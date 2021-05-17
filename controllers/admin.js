const Planete = require('../models/planete')

exports.getPlanete = (req, res, next) => {
    res.render('admin/add-planete');
};

exports.postPlanete = (req, res, next) => {
    
    const newPlanete = new Planete(req.body.title, req.body.description, req.body.link);
    newPlanete.save();
    res.redirect('planetes');
}

exports.getPlanetes = (req, res, next) => {
    Planete.fetchAll((planetes) => {
        res.render('admin/planetes', { planetes: planetes })
    });
};