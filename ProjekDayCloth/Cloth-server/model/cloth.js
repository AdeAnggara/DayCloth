var pool = require('./databaseConfig.js');
var clothDB = {
    getClothByKat: function (katid, callback) {
        pool.getConnection(function (err, conn) {
            if (err) {
                console.log(err);
                return callback(err, null);
            }
            else {
                console.log("Connected!");
                var sql = 'SELECT * FROM tab_cloth where kat_id =? ';
 conn.query(sql, [katid], function (err, result) {
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
};
module.exports = clothDB