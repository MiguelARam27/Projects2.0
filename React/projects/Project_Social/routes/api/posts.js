const express = require('express');
const router = express.Router();

//@route GET api/posts
router.get('/', (req, res) => res.send('Post router'));



module.exports = router;