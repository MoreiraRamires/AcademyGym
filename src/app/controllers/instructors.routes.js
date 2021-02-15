const Instructor = require('../models/Instructor')

module.exports ={
  index(req,res){ 
      Instructor.all(function(instructors){
        return res.render('instructors/index', {instructors})
      
      })
   
  },
  create(req,res){
    return res.render('instructors/create')
  },
  post(req,res){
    const keys = Object.keys(req.body)
    for (key of keys){
      if (req.body[key] == ""){
        return res.send('Pls, fill all fields')
      }
    }

     Instructor.create(req.body, function(Instructor){
       return  res.redirect(`/instructors/${instructor.id}`)
     })


  },
  show(req,res){ 
    return
  },
  edit(req,res){  
    return
  },
  put(req,res){
    return
  },
  delete(req,res){
  return
  }
}