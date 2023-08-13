const Repository = require('./base').Repository;
class UsersRepository extends Repository{
    constructor() {
        super();
    }

    findAll = async function(){
        const query = "SELECT * FROM users";
        const params = [];
        const result = await this.query(query,params);
        return result;
    }

    findOne = async function(id){
        // Binding occurs serially as present in the array
        const query = "SELECT * FROM users WHERE username=:id";
        const params = [id];
        const result = await this.query(query,params);
        return result;
    }

}

exports.UsersRepository = UsersRepository;