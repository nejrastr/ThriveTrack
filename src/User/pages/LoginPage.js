import React, { useState } from "react";
import "./LoginPage.css";
import Card from "../../Shared/UIElements/Card";
import AuthContext from "../../Shared/context/AuthContext";
import { useContext } from "react";
import Button from "../../Shared/FormElements/components/Button";
import { useNavigate } from "react-router-dom";
import Input from "../../Shared/FormElements/components/Input";

const LoginPage = () => {
  const auth = useContext(AuthContext);
  const nav = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const loginHandler = (event) => {
    event.preventDefault();

    auth.login();
    nav("/workouts/new");
  };

  return (
    <Card className="authentication">
      <form onSubmit={loginHandler}>
        <h2>Login Required</h2>
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
        <Button type="submit" onClick={loginHandler}>
          Log In
        </Button>
      </form>
    </Card>
  );
};

export default LoginPage;
