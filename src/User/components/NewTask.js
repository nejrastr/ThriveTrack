import React, { useState } from "react";
import Card from "../../Shared/UIElements/Card";
import Input from "../../Shared/FormElements/components/Input";
import { VALIDATOR_REQUIRE } from "../../Shared/utils/validators";
import Button from "../../Shared/FormElements/components/Button";

const NewTask = ({ onTaskAdded }) => {
  const [task, setTask] = useState("");
  const [isAdded, setIsAdded] = useState(false);
  const addHandler = (event) => {
    //event.prevetDefault();
    setIsAdded(true);
  };
  const resetForm = () => {
    setIsAdded(false);
    setTask("");
  };
  return (
    <Card className="tasks">
      {!isAdded && (
        <Input
          label="Task"
          type="text"
          id="taskname"
          value={task}
          validators={[VALIDATOR_REQUIRE()]}
          errorText={"Please enter a name."}
          onChange={(e) => setTask(e.target.value)}
        />
      )}
      {!isAdded && <Button onClick={addHandler}>Add</Button>}
      {isAdded && (
        <div>
          <p>{task}</p>
        </div>
      )}
    </Card>
  );
};

export default NewTask;
