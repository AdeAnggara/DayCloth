

var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false });
var jsonParser = bodyParser.json();
var path = require('path');
var cors = require("cors")
var cor = cors();
app.use(cor);
app.use(express.static(path.join(__dirname, "../public")));
var cloth = require('../model/cloth.js');
app.get('/api/category/:katid/cloth', function (req, res) {
    var katid = req.params.katid;
    cloth.getClothByKat(katid, function (err, result) {
        if (!err) {
            res.send(result);
        }
        else {
            console.log(err);
            res.status(500).send(err);
        }
    });
});
var userclothDB = require('../model/usercloth');
app.get('/api/usercloth', function (req, res) {
    userclothDB.getUsersCloth(function (err, result) {
        if (!err) {
            res.send(result);
        }
        else {
            console.log(err);
            res.status(500).send(err);
        }
    })
})
module.exports = app

app.post('/api/usercloth', urlencodedParser, jsonParser, function (req, res){
    var emailuser = req.body.emailuser;
    var passworduser = req.body.passworduser;
    var nama = req.body.nama;
    var alamat = req.body.alamat;
    var nomorhp = req.body.nomorhp;

    userclothDB.addUserCloth(emailuser, passworduser, nama, alamat, nomorhp, function(err, result){
        if (!err){
            console.log(result);
            res.send(result.affectedRows + ' record berhasil ditambahkan ');
        }
        else {
            console.log(err);
            res.send(err);
        }
    })
/* end routing POST adduser */

    app.delete('/api/usercloth/:iduser', function(req, res){
    var iduser = req.params.iduser;

        userclothDB.deleteUserCloth(iduser, function (err, result){
            if (!err){
                 console.log(result);
                 res.send(result.affectedRows + ' record dihapus');
             } else {
                 console.log(err);
                res.status(500).send(err.code);
              }
         });
    });

    /* end routing POST deleteuser*/

    app.post('/api/usercloth/:iduser', urlencodedParser, jsonParser, function(req, res){
        var passworduser = req.body.passworduser;
        var nama = req.body.nama;
        var alamat = req.body.alamat;
        var nomorhp = req.body.nomorhp;
        var iduser = req.params.iduser;

        userclothDB.updateUserCloth(passworduser, nama,  alamat, nomorhp, iduser, function (err, result){
            if (!err){
                console.log(result);
                res.send(result.affectedRows + ' record berhasil diubah ');
            }else {
                console.log(err);
                res.status(500).send(err.code);
            }
        });
    });

})