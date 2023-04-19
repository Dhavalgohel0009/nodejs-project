const router = require("express").Router();
const mysql = require('mysql')
const dbConn = require("../services/mysql-connection");

router.get('/users',function(req,res){
    let sql = 'SELECT * FROM users'
    dbConn.query(sql,(err,result)=>{
        if(err){
            throw err
        }
        const finalResult = [];
        if(Array.isArray(result)){
            result.map(item=> finalResult.push(item))
        }
        console.log("Get result==>",result);
        console.log("Get final==>",finalResult);
        let filter = result.filter(item=>item.ID==1)
        console.log("filter =>",filter)
        res.json(result)
    })
})

router.post('/add',(req,res)=>{
    let data = req.body;
    let sql = `INSERT INTO users values(
                ${data.ID},
                '${data.name}',
                '${data.address}',
                '${data.email}',
                ${data.phone}
                )`
    console.log("data=>",sql);
    dbConn.query(sql,(err,result)=>{
        if(err){
            throw err
        }
        console.log("Post result===>",result)
    })
    res.json(result);
})

router.delete('/delete/:ID',(req,res)=>{
    let ID = req.params.ID;
    console.log("ID==>",ID);
    let sql = `DELETE FROM users WHERE ID=${ID}`
    dbConn.query(sql,(err,result)=>{
        if(err){
            throw err
        }
        console.log("result==>",result);
        res.send("1 Row delete")
    })
})

router.get('/users',)

module.exports = router;