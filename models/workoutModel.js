// importing mongooose to create schema and model for every Workout Document
const mongoose = require('mongoose')

const WorkoutSchema = mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    weight: {
        type:Number,
        required: true
    },
    reps:{
        type:Number,
        required: true
    }
},{timestamps:true})
// timestamps enable createdAt and updatedAt property to each Workout document on DB

// exporting model created with Workout Schema
module.exports=mongoose.model('Workout',WorkoutSchema)