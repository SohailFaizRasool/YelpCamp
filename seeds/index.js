require("dotenv").config()

const mongoose= require('mongoose')
const cities= require('./cities')
const Campground= require('../models/campground')

const {descriptors,places } = require('./seedHelper')




const sample = (arr)=> arr[Math.floor(Math.random() * arr.length)]
mongoose.connect(
    "mongodb+srv://Sohail:Sohail%40786@cluster0.h1rnz3h.mongodb.net/YelpCamp?retryWrites=true&w=majority")
    .then(()=>{
    const seedDb = async()=>{
    const campGro= await Campground.deleteMany({})
    console.log(campGro);
    for (let i = 0; i <50; i++) {
        const rand1000 = Math.floor(Math.random()*1000);

        const camp = new Campground({
            location: `${sample(cities).city},${sample(cities).state}`,
            title : `${sample(descriptors)} ${sample(places)}`,
        })
        console.log(camp);
        await camp.save()
        
    }
}

seedDb()
}).catch((err)=>{
    console.log(err);
})
