const express = require('express');
const router = express.Router();

const {
    postMain,
    postAccess,
    postDataUsers
} = require('../controllers/post-controller');

router.post('/', postMain);
router.post('/admin-filippov', postAccess);
router.post('/data-users', postDataUsers);


module.exports = router;