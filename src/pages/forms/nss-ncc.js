import React, { useState } from "react";
import { Button, Stepper, Step, StepLabel } from "@mui/material";

// Forms
import AwardsAndRecognitions from "@/components/forms/3.4.2";
import ExtensionPrograms from "@/components/forms/3.4.3";
import CapacityBuilding from "@/components/forms/5.1.3";
import GuidanceAndCounselling from "@/components/forms/5.1.4";

const steps = [
  "Awards and recognitions",
  "Extension and outreach programmes",
  "Capacity building and skill enhancement programmes",
  "No. of students benefited by guidance and counselling",
];

function NssNcc() {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState({
    awards: [],
    extensionPrograms: [],
    capacityBuilding: [],
    guidanceAndCounselling: [],
  });

  const props = {
    formData,
    setFormData,
  };

  return (
    <div className="">
      <div className="p-8 flex justify-between items-center bg-titleBg text-white">
        <h1 className="text-2xl font-bold">NSS/NCC</h1>
      </div>
      <div className="m-8">
        <Stepper activeStep={step} alternativeLabel className="my-5 mt-7">
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
        {/* Forms */}
        <div>
          {step === 0 && <AwardsAndRecognitions {...props} />}
          {step === 1 && <ExtensionPrograms {...props} />}
          {step === 2 && <CapacityBuilding {...props} />}
          {step === 3 && <GuidanceAndCounselling {...props} />}
        </div>
        <div className="flex justify-end mt-5">
          <Button
            variant="contained"
            color="info"
            className="mr-4"
            onClick={() => setStep(step - 1)}
            disabled={step === 0}
          >
            Back
          </Button>
          <Button
            variant="contained"
            color="info"
            onClick={() => setStep(step + 1)}
          >
            {step === steps.length - 1 ? "Submit" : "Next"}
          </Button>
        </div>
      </div>
    </div>
  );
}

export default NssNcc;
