const User = require('../model/user')
const bcrypt = require('bcrypt')

exports.register = async (req,res)=>{
  try{
    //generate new password and encrypt it with bcrypt
    const salt = await bcrypt.genSalt(10)
    const hash = await bcrypt.hash(req.body.password,salt)
    //create new user
    const newUser = new User({
      fullname: req.body.fullname,
      username: req.body.username,
      email:  req.body.email,
      password: hash,
      profilePicture: req.body.profilePicture
    })
    //save user to database
    const user = await newUser.save()
    res.status(200).send(user)
  }catch (e) {
    return res.status(500).json(e)
  }
}

exports.login = async (req,res)=>{
  try {
    //query to find only one of the user from database
    const user = await User.findOne({username:req.body.username})
    //when user not found after query
    !user && res.status(404).json('user not found')
    //query to check if the user password is valid or not when user send POST request to login with this API
    const validPassword = await bcrypt.compare(req.body.password,user.password)
    //when password is not the same with password stored in database or bad request
    !validPassword && res.status(400).json('wrong password')
    //when there's nothing wrong, then send message
    res.status(200).send(['success login',user])
  } catch (e) {
    return res.status(500).json(e)
  }
}
