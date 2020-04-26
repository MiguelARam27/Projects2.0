const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');



//@route GET api/auth
router.get('/', auth, (req, res) => res.send('Auth router'));



module.exports = router;