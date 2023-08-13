const Repository = require('./base').Repository;
class DriverRepository extends Repository{
    constructor() {
        super();
    }

    findAll = async function(){
        const query = "SELECT * FROM driver";
        const params = [];
        const result = await this.query(query,params);
        return result;
    }

    findOne = async function(id,id2){
        // Binding occurs serially as present in the array
        const query = "SELECT * FROM driver WHERE id=:id";
        const params = [id,id2];
        const result = await this.query(query,params);
        return result;
    }

}

exports.DriverRepository = DriverRepository;