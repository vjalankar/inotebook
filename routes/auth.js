const express=require('express')
const router=express.Router()

router.get('/',(req,res) => {

const obj ={

name:"vivek"

}

res.json(obj)


})

module.exports = router