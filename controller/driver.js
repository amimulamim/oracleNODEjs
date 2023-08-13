const Controller = require('./base').Controller;
const DriverRepository = require("../repository/driver").DriverRepository;
const driverRepository = new DriverRepository();

class DriverController extends Controller {
    constructor() {
        super();
    }

    list = async (req, res, next) => {
        let employees = await driverRepository.findAll();
        if (!employees.success)
            return res.status(500).json({code: "E0001", description: "Internal Error"});
        else
            return res.status(200).json(employees.data);
    };
    fetch = async (req, res, next) => {
        let id = req.params.id;
        let id2=req.params.id2;
        if(!id2){
            id2=200;
        }
        let employee = await driverRepository.findOne(id,id2);
        if (!employee.success)
            return res.status(404).json({code: "E0002", description: "Internal Server Error"});
        else if (employee.data.length === 0)
            return res.status(500).json({code: "E0002", description: "Employee with id:" + id + " not found."});
        else
            return res.status(200).json(employee.data);
    };
};


exports.DriverController = DriverController;