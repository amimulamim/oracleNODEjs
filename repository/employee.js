const Repository = require('./base').Repository;
class EmployeeRepository extends Repository{
    constructor() {
        super();
    }

    findAll = async function(){
        const query = "SELECT * FROM EMPLOYEES";
        const params = [];
        const result = await this.query(query,params);
        return result;
    }

    findOne = async function(id,id2){
        // Binding occurs serially as present in the array
        const query = "SELECT * FROM employees WHERE employee_id > :employee_id AND employee_id < :2";
        const params = [id,id2];
        const result = await this.query(query,params);
        return result;
    }

}

exports.EmployeeRepository = EmployeeRepository;