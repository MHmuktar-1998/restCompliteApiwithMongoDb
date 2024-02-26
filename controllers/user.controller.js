 const user = require('../modals/user.model');
 const { v4: uuidv4 } = require('uuid');


 const getAllUser = async(req,res)=>{
    try {
        const allUser = await user.find();
        res.status(202).json(allUser);
    } catch (error) {
        res.send(error.message)
    }
}

const getOneUser = async(req,res)=>{
    try {
        const oneUser = await user.findOne({id: req.params.id});
        res.status(202).json(oneUser);
    } catch (error) {
        res.send(error.message)
    }
}

const createUser = async(req,res)=>{
   try {
    const newUser = new user({
        id : uuidv4(),
        name : req.body.name,
        age : Number(req.body.age)
    })
    await newUser.save();
    res.status(202).json(newUser)
   } catch (error) {
        res.status(404).send(error.message);
   }
}

const updateUser = async(req,res)=>{
    try {
        const updateId = await user.findOne({id: req.params.id});
        updateId.name = req.body.name;
        updateId.age = Number(req.body.age);
        await updateId.save();
        res.status(202).json(updateId)
       } catch (error) {
            res.status(404).send(error.message);
       }

}

const deleteUser = async(req,res)=>{
    try {
        const oneUser = await user.deleteOne({id: req.params.id});
        res.status(202).json({message: "user is deleted"});
    } catch (error) {
        res.send(error.message)
    }
}




module.exports = {getAllUser,getOneUser, createUser, updateUser,deleteUser}