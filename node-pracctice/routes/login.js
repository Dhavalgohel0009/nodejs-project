const router = require("express").Router();
const jwt = require("jsonwebtoken");

router.get('/',(req,res)=>{

    const token = jwt.sign({ name : 'dhaval'},'dhaval@urvashi');
    console.log("token=>",token);
    res.send(token)
})

module.exports = router;