const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');

const Profile = require('../../models/Profile');

const User = require('../../models/User');


//@route GET api/profiles/me
router.get('/me', auth, async (req, res) => {
    try {
        const profile = await Profile.findOne({ user: req.user.id }).populate('user',
            ['name', 'avatar']);

        //check to see if there is a profile
        if (!profile) {
            return res.status(400).json({ msg: "there is no profile for this user" });
        }

        //if there is a profile
        res.json(profile);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});






module.exports = router;