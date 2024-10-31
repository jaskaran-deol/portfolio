import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Techincal Lead",
          "Experienced Senior Software Engineer",
          "Senior Full Stack Software Developer",
          "Coach",
          "Solution Architect"
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
