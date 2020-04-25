const express = require('express');
const router = express.Router();

//@route GET api/profiles
router.get('/', (req, res) => res.send('Profile router'));



module.exports = router;