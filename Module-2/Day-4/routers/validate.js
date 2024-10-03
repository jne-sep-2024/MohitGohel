const router=require('express').Router();

router.post('/validate',require('../controller/validate.js').validate);

module.exports=router;