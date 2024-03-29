const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const config = require('config');


const{check,validationResult} =require('express-validator');

const User = require('../models/User')
//@route POST api/users
//@desc register a user
//@access Public
router.post('/',[
    check('name','Name is required')
        .not()
        .isEmpty(),
    check('email','Please include a valid email').isEmail(),
    check('password','Please enter a password with 6 valid characters').isLength({min:6})
], async (req,res)=>{
    // res.send(req.body);
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array() });
    }

    // res.send('passed');
    const {name,email,password} = req.body;
    try{
        let user = await User.findOne({email:email});
        if(user){
            return res.status(400).json({msg:'user already exists'})
        }
        user = new User(
            {
                name,
                email,
                password

            });
        const salt = await bcrypt.genSalt(10);
        user.password= await bcrypt.hash(password,salt);

        await user.save();

        const payload = {
            user:{
                id:user.id
            }
        }

    jwt.sign(payload,
        config.get('jwtSecret'),
        {
        expiresIn:360000},
        (err,token)=>{
        if(err) throw err;
        res.json({ token})
    });
    } catch(error){
        console.error(error.message);
        res.status(500).send("server error")
    }
});


module.exports = router;