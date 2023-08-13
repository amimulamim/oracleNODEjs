const router = require('express-promise-router')();

const UsersController = require('../controller/users').UsersController;

let controller = new UsersController();

router.get('/all',controller.list);
router.get('/:id',controller.fetch);


router.delete('/',);
router.put('/',);

module.exports = router;