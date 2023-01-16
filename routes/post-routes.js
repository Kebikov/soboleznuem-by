const express = require('express');
const router = express.Router();

const {
    postMain,
    postAccess,
    postDataUsers,
    getPageUserInfo,
    updateStatus,
    updateName,
    updateTextInSite
} = require('../controllers/post-controller');

router.post('/', postMain);
router.post('/admin-filippov', postAccess);
router.post('/data-users', postDataUsers);
router.get('/data-user/:id', getPageUserInfo);
router.post('/update-status', updateStatus);
router.post('/update-name', updateName);
router.post('/data-change-info', updateTextInSite);


module.exports = router;