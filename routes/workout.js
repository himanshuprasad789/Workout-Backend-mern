// importing express to create routes using express.Router
const express = require('express');
const router=express.Router();
// controllers for different types for requests
const {createWorkout, getWorkouts, getWorkout,deleteWorkout, updateWorkout}=require('./../controllers/workoutController')


//get post patch delete req and 
router.get('/',getWorkouts)
router.post('/',createWorkout)
router.get('/:id',getWorkout)
router.patch('/:id',updateWorkout)
router.delete('/:id',deleteWorkout)

// workout router
module.exports=router;