const express = require('express')
const router = express.Router()

router.get('/', (req,res)=> {
  res.json({foo:'bar', content: req.headers['content-type'], token: req.headers.authorization})
})

router.post('/create/', (req,res)=> {
  let obj = req.body
  obj.content = req.headers['content-type']
  obj.token = req.headers.authorization
  res.json(obj)
})

router.put('/update/:id', (req,res)=> {
  let id = req.params.id
  let obj = req.body
  obj.id = id
  obj.content = req.headers['content-type']
  obj.token = req.headers.authorization
  res.json(obj)
})

router.delete('/delete/:id', (req,res)=> {
  let id = req.params.id
  res.json({id,content: req.headers['content-type'], token: req.headers.authorization})
})


module.exports = router