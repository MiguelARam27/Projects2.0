const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const { check, validationResult } = require('express-validator');

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

//@route Post api/profile
//@desc Create or update user profile
//@acess Private
router.post('/', [auth,
    [
        check('status', "status is required").not().isEmpty(),
        check('skills', 'Skills is required').not().isEmpty()
    ]
], async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const {
        company,
        website,
        location,
        bio,
        status,
        githubusername,
        skills,
        youtube,
        facebook,
        twitter,
        instagram,
        linkedin
    } = req.body;

    //build profile object
    const profileFields = {};
    profileFields.user = req.user.id;
    if (company) {
        profileFields.company = company;
    }
    if (website) {
        profileFields.website = website;
    }
    if (location) {
        profileFields.location = location;
    }
    if (bio) {
        profileFields.bio = bio;
    }
    if (status) {
        profileFields.status = status;
    }
    if (githubusername) {
        profileFields.githubusername = githubusername;
    }
    if (skills) {
        profileFields.skills = skills.split(',').map(skill => skill.trim());
    }

    //build social array object
    profileFields.social = {};
    if (youtube) {
        profileFields.social.youtube = youtube;
    }
    if (twitter) {
        profileFields.social.twiter = twitter;
    }
    if (facebook) {
        profileFields.social.facebook = facebook;
    }
    if (linkedin) {
        profileFields.social.linkedin = linkedin;
    }
    if (instagram) {
        profileFields.social.instagram = instagram;
    }
    try {
        let profile = await Profile.findOne({ user: req.user.id });

        if (profile) {
            profile = await Profile.findOneAndUpdate(
                { user: req.user.id },
                { $set: profileFields },
                { new: true });
            return res.json(profile);
        };
        //create 
        profile = new Profile(profileFields);
        await profile.save();
        res.json(profile);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }


});

//@route GET api/profiles
//@desc get all profiles
//access public


router.get('/', async (req, res) => {
    try {
        const profiles = await Profile.find().populate('user', ['name', 'avatar']);
        res.json(profiles);
    } catch (err) {
        console.error(err.message);
        res.status(500).send("Server error");
    }


});


//@route GET api/profiles/user/:user_id
//@desc get all profiles
//access public
router.get('/user/:user_id', async (req, res) => {
    try {
        const profile = await Profile.findOne({
            user: req.params.user_id
        }).populate('user', ['name', 'avatar']);

        if (!profile) return res.status(400).json({ msg: 'Profile not found' });

        res.json(profile);
    } catch (err) {
        console.error(err.message);

        if (err.name === 'CastError') {
            return res.status(400).json({ msg: 'Profile not found' });
        }
        res.status(500).send('Server Error');
    }
});


//@route GET api/delete
//@desc delete profile, user and posts
//access private
router.delete('/', auth, async (req, res) => {
    try {
        //Remove profile
        await Profile.findOneAndRemove({ user: req.user.id });

        //Remove user
        await User.findOneAndRemove({ _id: req.user.id });

        res.json({ msg: 'user deleted' });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});









module.exports = router;