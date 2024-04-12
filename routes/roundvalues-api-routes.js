// Requiring our models
const { Roundvalues } = require("../models");


module.exports = function (app) {

    // Get everything in Roundvalues table
    app.get("/api/roundvalues", function (req, res) {
        Roundvalues.findAll({})
            .then(function (dbroundvalues) {
                res.json(dbroundvalues)
            })
    });

    // Find roundvalues where id = __
    app.get('/api/roundvalues/:status', function (req, res) {
        Roundvalues.findAll({
            where: {
                status: req.params.status
            }
        })
            .then(function (dbroundvalues) {
                res.json(dbroundvalues)
            })
        console.log(req.params)
    })
}