import React from "react";
import "./About.css";
import Navigation from "../components/Navigation";
import Container from "../components/Container";

function About() {
  return (
    <div className="about">
      <Navigation />
      <Container>
        <h1>About ROTA Snowsports </h1>
        <p>
          Welcome to ROTA Snowsports, your destination for snowboard coaching! We are passionate about helping riders unlock their full potential on the mountain. Whether you are taking your first turns or a rider looking to improve your style, we're here to guide you on your snowboarding journey.
        </p>
        <h2>Meet Your Coach</h2>
        <p>
          I'm Mihai Bledea, and I'm honored to be your dedicated snowboard coach at ROTA Snowsports. With years of experience and a deep love for the sport, I'm committed to providing you with the best instruction and guidance to help you achieve your snowboarding goals.
        </p>
        <h2>What We Offer</h2>
        <p>
          At ROTA Snowsports, we offer tailored coaching sessions that are designed to meet your specific needs. Here's what you can expect when you choose us as your snowboard coach:
        </p>
        <ul>
          <li>Personalized Instruction: We believe in individualized coaching to ensure you progress at your own pace and reach your goals.</li>
          <li>Expert Guidance: Our coaching team consists of passionate and experienced snowboarders who are dedicated to helping you become the best rider you can be.</li>
          <li>Fun and Safety: Safety on the mountain is paramount, and we make sure to create a fun and comfortable learning environment for all our clients.</li>
          <li>Advanced Techniques: Whether you're interested in mastering carving, freestyle, or off-piste riding, we have the expertise to take your skills to the next level.</li>
        </ul>
        <h2><a href="/lessons">Join Us Today</a></h2>
      </Container>
    </div>
  );
}

export default About;
