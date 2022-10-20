var express = require('express');
var router = express.Router();
var skillsCtrl = require('../controller/skills');
/* GET users listing. */
router.get('/', skillsCtrl.index);
// GET /skills/new
router.get('/new', skillsCtrl.new);


// GET /skills/:id
router.get('/:id', skillsCtrl.show);

module.exports = router;
