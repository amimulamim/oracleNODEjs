const oracledb = require('oracledb');
oracledb.outFormat = oracledb.OBJECT;
class Repository {
    constructor() {
        this.connection = undefined;
    }

    query = async function (query, params) {
        if (this.connection === undefined) {
            this.connection = await oracledb.getConnection({
                user: process.env.DB_USER,
                password: process.env.DB_PASS,
                connectionString: process.env.DB_CONNECT_STRING,
                poolMax: 10,
                poolMin: 1,
                poolIncreament:1

            });
        }
        try {
            let result = await this.connection.execute(query, params);
            return {
                success:true,
                data: result.rows
            }

        } catch (error) {
            console.log(error);
            return {
                success:false,
                error
            }
        }
    };
}

exports.Repository = Repository;


// JWT token
// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.3liebX5UMVR45SEmCYeM2YOTSEFDiDSP4FnUMrpMepU