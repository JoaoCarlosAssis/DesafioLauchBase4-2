const express = require('express')
const routes = express.Router()

routes.get('/', (req, res)=>{
  return res.redirect('/teachers')
})

routes.get('/teachers', (req, res)=>{
  return res.render('teachers/teachers')
})
routes.get('/students', (req, res)=>{
  return res.render('students/students')
})
module.exports = routes
