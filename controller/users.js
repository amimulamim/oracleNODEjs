const Controller = require('./base').Controller;
const UsersRepository = require("../repository/users").UsersRepository;
const usersRepository = new UsersRepository();

class UsersController extends Controller {
    constructor() {
        super();
    }

    list = async (req, res, next) => {
        let users = await usersRepository.findAll();
        if (!users.success)
            return res.status(500).json({code: "E0001", description: "Internal Error"});
        else
            return res.status(200).json(users.data);
    };
    fetch = async (req, res, next) => {
        let id = req.params.id;
        let id2=req.params.id2;
        if(!id2){
            id2=200;
        }
        let user = await usersRepository.findOne(id,id2);
        if (!user.success)
            return res.status(404).json({code: "E0002", description: "Internal Server Error"});
        else if (user.data.length === 0)
            return res.status(500).json({code: "E0002", description: "user with username:" + id + " not found."});
        else
            return res.status(200).json(user.data);
    };
};


exports.UsersController = UsersController;