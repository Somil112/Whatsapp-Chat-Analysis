import React from "react"
import step1 from "../img/step_1.png"
import step2 from "../img/step_2.png"
import step3 from "../img/step_3.png"

const Steps = () => {
  return (
    <div className="container">
      <h1
        style={{
          color: "#ffffff",
          width: "100%",
          textAlign: "center",
          fontSize: "2.5rem",
          marginBottom: "1rem",
        }}
      >
        How to Export Chat from Whatsapp?
      </h1>
      <img className="howto" src={step1} alt="Step 1" />
      <img className="howto" src={step2} alt="Step 2" />
      <img className="howto" src={step3} alt="Step 3" />
    </div>
  )
}

export default Steps
