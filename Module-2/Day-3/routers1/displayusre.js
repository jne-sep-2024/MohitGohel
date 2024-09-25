const express=require('express');
const app=express();

const router=express.Router();

// const b=[];
const displayuser=require('../controller/displayusre');
router.post('/adduser',displayuser.display);

exports.router=router;
exports.userArray=displayuser.b;