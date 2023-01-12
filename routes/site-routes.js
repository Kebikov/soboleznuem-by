const express = require('express');
const router = express.Router();

const {getPageContacts} = require('../controllers/site-controller');

router.get('/contacts', getPageContacts);

module.exports = router;