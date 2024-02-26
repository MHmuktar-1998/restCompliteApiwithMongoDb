
const express = require('express');
const { getAllUser, getOneUser, createUser, updateUser, deleteUser } = require('../controllers/user.controller');
const router = express.Router();

router.get('/',getAllUser);
router.get('/:id',getOneUser);
router.post('/',createUser);
router.patch('/:id',updateUser);
router.delete('/:id',deleteUser);






module.exports = router;