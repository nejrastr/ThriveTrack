import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import "./NewWorkout.css";
import Card from "../../Shared/UIElements/Card";
import AuthContext from "../../Shared/context/AuthContext";
import Button from "../../Shared/FormElements/components/Button";
import Input from "../../Shared/FormElements/components/Input";
import "./SignUpPage.css";
import "./../../Shared/FormElements/components/Button.css";
const SignUpPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");

  const auth = useContext(AuthContext);
  const nav = useNavigate();
  const signupHandler = (event) => {
    event.preventDefault();
    auth.login();
    nav("/workouts/new");
  };

  return (
    <Card className="authentication">
      <form onSubmit={signupHandler}>
        <h2>Sign Up To Create Your Workout</h2>
        <Input
          label="Name"
          type="name"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          label="Surname"
          type="surname"
          placeholder="Surname"
          value={surname}
          onChange={(e) => setSurname(e.target.value)}
        />
        <Input
          label="Username"
          type="username"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <Input
          label="Password"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <Button type="submit" onClick={signupHandler}>
          Sign Up
        </Button>
      </form>
    </Card>
  );
};
export default SignUpPage;
