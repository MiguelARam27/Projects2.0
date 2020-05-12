const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const { check, validationResult } = require('express-validator');
const config = require('config');

const Post = require('../../models/Post');



//@route GET api/posts
//@desc create a post
// @acces Private
router.get('/', [auth,
    [check('text', "Text is required").not().isEmpty()
    ]
], async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
});



module.exports = router;