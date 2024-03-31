const Campground= require('../models/campground')

exports.getAll = (req,res)=>{
  res.render("home")
}
exports.getCampground = async (req,res)=>{
  const campgrounds = await Campground.find({})

  res.render('campgrounds/index',{campgrounds: campgrounds})
  
}
exports.getRegister = (req,res)=>{
 
}