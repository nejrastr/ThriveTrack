import React, { useState } from "react";
import "./NewWorkout.css";
import "../../Shared/UIElements/Card.css";
import Card from "../../Shared/UIElements/Card";
import Input from "../../Shared/FormElements/components/Input";
import Button from "../../Shared/FormElements/components/Button";
import { VALIDATOR_REQUIRE } from "../../Shared/utils/validators";
import NewExercise from "../../Workouts/components/NewExercise";

const NewWorkout = () => {
  const [workoutName, setWorkoutName] = useState("");
  const [workoutType, setWorkoutType] = useState("");
  const [numberOfExercise, setNumberOfExercises] = useState("");
  const [duration, setDuration] = useState("");
  const [showNewExercise, setShowNewExercise] = useState(false);

  const addWorkoutHandler = (event) => {
    event.preventDefault();
    setShowNewExercise(true);
    setNumberOfExercises(parseInt(numberOfExercise));
  };

  return (
    <>
      <Card className="new-workout">
        <h2>Create Your Workout</h2>
        <form onSubmit={addWorkoutHandler}>
          <Input
            label="Workout Name"
            type="text"
            placeholder="Workout name"
            value={workoutName}
            validators={[VALIDATOR_REQUIRE()]}
            errorText={"Please enter a workout name."}
            onChange={(e) => setWorkoutName(e.target.value)}
          />
          <Input
            label="Workout Type"
            type="text"
            placeholder="Workout type (strength, cardio, HIIT...)"
            value={workoutType}
            validators={[VALIDATOR_REQUIRE()]}
            errorText={"Please enter a workout type."}
            onChange={(e) => setWorkoutType(e.target.value)}
          />
          <Input
            label="Number Of Exercises"
            type="text"
            placeholder="Number of exercises"
            value={numberOfExercise}
            validators={[VALIDATOR_REQUIRE()]}
            errorText={"Please enter a number of exercises."}
            onChange={(e) => setNumberOfExercises(e.target.value)}
          />
          <Input
            label="Duration (in minutes)"
            type="text"
            placeholder="Duration of workout"
            value={duration}
            validators={[VALIDATOR_REQUIRE()]}
            errorText={"Please enter duration of a workout."}
            onChange={(e) => setDuration(e.target.value)}
          />
          <Button type="submit">Add Exercises</Button>
        </form>
      </Card>
      {showNewExercise && <NewExercise numberOfExercise={numberOfExercise} />}
    </>
  );
};

export default NewWorkout;
