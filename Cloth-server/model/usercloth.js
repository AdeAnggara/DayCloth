var pool = require('./databaseConfig.js');
var userclothDB = {
    getUsersCloth: function (callback) {
        pool.getConnection(function (err, conn) {
            if (err) {
                console.log(err);
                return callback(err, null);
            }
            else {
                console.log("Connected!");
                var sql = 'SELECT * FROM usercloth';
                conn.query(sql, function (err, result) {
                    conn.release();
                    if (err) {
                        console.log(err);
                        return callback(err, null);
                    } else {
                        console.log(result);
                        return callback(null, result);
                    }
                });
            }
        });
    }
    /* end function getUser */

    ,
    addUserCloth: function (emailuser, passworduser, nama, alamat, nomorhp, callback){
        pool.getConnection(function(err, conn){
            if (err){
                console.log(err);
                return callback(err, null);
            }
            else {
                console.log("Connected!");
                var sql = 'INSERT INTO usercloth (emailuser, passworduser, nama, alamat, nomorhp) values (?,?,?,?,?)';
                conn.query(sql, [emailuser, passworduser, nama, alamat, nomorhp], function (err, result){
                    conn.release();
                    if (err){
                        console.log(err);
                        return callback(err, null);
                    }else{
                        console.log(result);
                        return callback(null, result);
                    }
                });
            }
        });
    }
    /*end function addUser*/
    ,
    deleteUserCloth: function (iduser, callback){
        pool.getConnection(function(err, conn){
            if (err){
                console.log(err);
                return callback(err, null);
            }
            else {
                console.log("Connected");
                var sql = 'DELETE FROM usercloth WHERE iduser=?';
                conn.query(sql, [iduser], function (err, result) {
                    conn.release();
                    if (err){
                        console.log(err);
                        return callback(err, null);
                    }else {
                        console.log(result);
                        return callback(null, result);
                    }

                });
            }
        });
    }
    /* end function deleteUser */

    , 
    updateUserCloth: function (passworduser, nama, alamat, nomorhp,  iduser, callback ){
        pool.getConnection(function (err, conn){
            if (err){
            console.log(err);
            return callback(err, null);  
            }
            else {
                console.log("Connected!");
                console.log(passworduser+","+nama+","+alamat+","+nomorhp+","+iduser)
                var sql = 'UPDATE usercloth SET passworduser=?, nama=?, alamat=?, nomorhp=?, WHERE iduser=?';
                conn.query(sql, [passworduser, nama, alamat, nomorhp, iduser], function (err, result){
                    conn.release();
                    if (err){
                        console.log(err);
                        return callback(err, null);
                    }else {
                        console.log(result);
                        return callback(null, result);
                    }
                });
             }
        

        });
    }
};


module.exports = userclothDB