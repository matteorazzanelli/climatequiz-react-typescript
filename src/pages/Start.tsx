import React from "react";
import Signin from "../components/Signin";

export default function Start() {
  return (
    <>
      <h1 style={{ textAlign: "center" }}>
        Climate change test: how many do you know?
      </h1>
      <div
        style={{
          fontSize: 24,
          textAlign: "center",
          paddingTop: "30px",
          paddingLeft: "100px",
          paddingRight: "100px",
        }}
      >
        Take our quiz to see how much you know about the environment and
        climate change.
        <br />
        <br />
        At the end you will receive a score from 0 to 10 that you can share with
        your friends on social media!
      </div>
      <Signin />
    </>
  );
}
