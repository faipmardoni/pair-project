const express = require('express')
const router = express()

router.get('/',function(req,res){
    res.redirect('/customer')
})

module.exports = router