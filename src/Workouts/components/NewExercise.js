import React, { useState } from "react";
import Card from "../../Shared/UIElements/Card";
import Input from "../../Shared/FormElements/components/Input";
import { VALIDATOR_REQUIRE } from "../../Shared/utils/validators";
import Button from "../../Shared/FormElements/components/Button";
import "../../Workouts/components/NewExercise.css";
import { useNavigate } from "react-router-dom";
const NewExercise = ({ numberOfExercise }) => {
  const [exerciseName, setExerciseName] = useState("");
  const [load, setLoad] = useState("");
  const [sets, setSets] = useState("");
  const [reps, setReps] = useState("");
  const [exerciseCount, setExerciseCount] = useState(0);
  const navigation = useNavigate();
  const saveWorkoutHandler = (event) => {
    event.preventDefault();
    navigation("/u1/workouts");
  };
  const newExerciseHandler = (event) => {
    event.preventDefault();
    console.log(numberOfExercise);

    if (exerciseCount < numberOfExercise) {
      setExerciseCount((prevCount) => prevCount + 1);

      setExerciseName("");
      setLoad("");
      setSets("");
      setReps("");

      if (exerciseCount === numberOfExercise) {
        alert("You have entered all exercises. Click 'Save Workout'.");
      }
    }
  };

  return (
    <Card className="new-exercise">
      <h2>Add New Exercise</h2>
      <form onSubmit={newExerciseHandler}>
        <Input
          label="Exercise Name"
          type="text"
          placeholder="Exercise name"
          value={exerciseName}
          validators={[VALIDATOR_REQUIRE()]}
          errorText={"Please enter a exercise name."}
          onChange={(e) => setExerciseName(e.target.value)}
        />
        <Input
          label="Load(in kg)"
          type="text"
          placeholder="Load in kg"
          value={load}
          validators={[VALIDATOR_REQUIRE()]}
          errorText={"Enter a value."}
          onChange={(e) => setLoad(e.target.value)}
        />
        <Input
          label="Number Of Sets"
          type="text"
          placeholder="Number of sets"
          value={sets}
          validators={[VALIDATOR_REQUIRE()]}
          errorText={"Please enter a number of sets for this exercise."}
          onChange={(e) => setSets(e.target.value)}
        />
        <Input
          label="Number Of Reps"
          type="text"
          placeholder="Number of sets"
          value={reps}
          validators={[VALIDATOR_REQUIRE()]}
          errorText={"Please enter a number of reps for this exercise."}
          onChange={(e) => setReps(e.target.value)}
        />
        {exerciseCount !== numberOfExercise - 1 ? (
          <Button type="submit">Save</Button>
        ) : null}

        {exerciseCount === numberOfExercise - 1 && (
          <Button onClick={saveWorkoutHandler} type="button">
            Save Workout
          </Button>
        )}
      </form>
    </Card>
  );
};

export default NewExercise;
