var express = require('express');
var router = express.Router();
const userHelper = require('../helpers/userHelper')

/* GET home page. */

router.get('/user/:id',async(req,res)=>{
  console.log(req.params.id);
  const data = await userHelper.findUser(req.params.id);
  console.log(data);
  res.json({userData:data});
});


router.get('/', async(req, res)=>{
  console.log('mainnnnnnnn');
  res.json({  message: "sagar main"});
});

router.get('/users-list',async(req,res)=>{
  const data = await userHelper.getUserList()
  res.json({userData:data})
})

router.get('/admin-authentication',async(req,res)=>{
  res.json({user:'admin',password:'1234'})
})

router.post('/users-list',async(req,res)=>{
  console.log('called');
  console.log(req.body);
  await userHelper.addUser(req.body)
})
router.get('/delete-user/:id',async(req,res)=>{
  await userHelper.deleteUser(req.params.id)
  console.log(req.params.id);
})

module.exports = router;
