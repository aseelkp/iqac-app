import React from "react";
import { Stepper, Step, StepLabel } from "@mui/material";

const steps = [
  "Awards and recognitions",
  "Extension and outreach programmes",
  "Capacity building and skill enhancement programmes",
  "No. of students benefited by guidance and counselling",
];

function NccStepper({step}) {
  return (
    <Stepper activeStep={step} alternativeLabel className="my-5">
      {steps.map((label) => (
        <Step key={label}>
          <StepLabel>{label}</StepLabel>
        </Step>
      ))}
    </Stepper>
  );
}

export default NccStepper;
