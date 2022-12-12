const router = require('express').Router()
const User = require('../models/UserSchema')
const Post = require('../models/Post')
const bcrypt = require('bcrypt')


//UPDATE
router.put('/:id',async(req,res)=>{
    if(req.body.userId === req.params.id){

        if(req.body.password){
            const salt = await bcrypt.genSalt(10)
            req.body.password  = await bcrypt.hash(req.body.password, salt) 
        }
        try {
            const updatedUser = await User.findByIdAndUpdate(
                req.params.id,
                {
                    $set:req.body
                },
                {new : true}
            )

            res.status(400).json(updatedUser)
        } catch (err) {
            res.status(401).json(err)
        }
    }
    else{
        res.status(401).json("You can update only your account.")
    }
})


//DELETE

router.delete('/:id',async(req,res)=>{
    if(req.body.userId === req.params.id){

        // find the id entered by user
        const user = await User.findById(req.params.id) 

         try {
            //after finding the id it will delete the user
            try {

                await Post.deleteMany({username: user.username})//it will delete all the posts of the user
                await User.findByIdAndDelete(req.params.id)
                res.status(200).json("User has been deleted..")
      
              } catch (err) {
                  res.status(401).json(err)
              }
        } catch (err) {
            res.status(404).json("User not found!")
        }
    
    }
    else{
        res.status(401).json("You can update only your account.")
    }
})

//GET USER

router.get('/:id', async(req,res)=>{
    try {
        const user = await User.findById(req.params.id)
        const{password,...others} = user._doc
        res.status(200).json(others)
    } catch (err) {
        res.status(500).json(err)
    }
})


module.exports = router