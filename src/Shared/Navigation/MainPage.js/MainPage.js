import React from "react";
import "./MainPage.css";
import Image from "../../../jonathan-borba-lrQPTQs7nQQ-unsplash.jpg";

const MainPage = (props) => {
  return (
    <section className="hero" style={{ backgroundImage: `url(${Image})` }}>
      <div className="content">
        <h1>Evolve Your Progress.</h1>
        <p>Do you want to track progress on your fitness journey?</p>
        <a href="#">Create Your Workout</a>
      </div>
    </section>
  );
};

export default MainPage;
