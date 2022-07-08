//importing mongoose for 
const { default: mongoose } = require('mongoose');
const Workout=require('./../models/workoutModel')

// get all workouts
const getWorkouts=async (req, res) => {
    const workouts = await Workout.find({}).sort({createdAt: -1})
    res.status(200).json(workouts)
}

// post a workout
const createWorkout = async (req, res) => {
  const { title, weight, reps } = req.body;
  try {
    const workout = await Workout.create({ title, weight, reps });
    res.status(200).json(workout);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// get a workout 
const getWorkout =async (req, res) =>{
    const {id} = req.params
    // check if id is 12 byte string
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:'No workout found'});
    }
    const workout = await Workout.findById(id);
    if(!workout){
        return res.status(404).json({error:'No workout found'});
    }
    res.status(200).json(workout);
}

// delete a workout
const deleteWorkout =async (req, res)=>{
  const {id} = req.params;
  if(!mongoose.Types.ObjectId.isValid(id)){
    return res.status(400).json({error: 'Invalid id'})
  }
  const workout=await Workout.findByIdAndDelete({_id:id})
  if(!workout){
    return res.status(400).json({error: 'No workout'})
  }
  res.status(200).json(workout)
}
const updateWorkout = async (req, res)=>{
  const {id} = req.params;
  if(!mongoose.Types.ObjectId.isValid(id)){
    return res.status(400).json({error: 'Invalid id'})
  }
  const workout=await Workout.findByIdAndUpdate({_id:id},{...req.body})
  if(!workout){
    return res.status(400).json({error: 'No workout'})
  }
  res.status(200).json(workout)

}

module.exports = { getWorkouts,createWorkout,getWorkout,deleteWorkout,updateWorkout };
