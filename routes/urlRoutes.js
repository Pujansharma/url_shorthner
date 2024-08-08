const express = require('express');
const router = express.Router();
const { createShortUrl, redirectToLongUrl } = require('../controllers/urlController');

router.post('/shorten', createShortUrl);
router.get('/:code', redirectToLongUrl);

module.exports = router;
