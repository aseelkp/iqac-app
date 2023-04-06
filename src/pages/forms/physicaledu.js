import { useState } from "react";
import { Stepper, Step, StepLabel } from "@mui/material";
import { CustomButton } from "@/components/styles";

// Forms
import AwardsAndRecognitions from "@/components/forms/5.3.1";
import Events from "@/components/forms/5.3.3";

const steps = [
  "Awards and Recognitions",
  "Events or Competitions Participated",
];

function PhysicalEdu() {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState({
    form_5_3_1: [],
    form_5_3_3: [],
  });

  const props = {
    formData,
    setFormData,
  };

  return (
    <div className="">
      <div className="p-8 py-5 flex justify-between items-center bg-titleBg text-white">
        <h1 className="text-2xl font-bold">Physical Education</h1>
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
          {step === 1 && <Events {...props} />}
        </div>
        <div className="flex justify-end mt-5">
          <CustomButton
            variant="contained"
            color="info"
            className="mr-4"
            onClick={() => setStep(step - 1)}
            disabled={step === 0}
          >
            Back
          </CustomButton>
          <CustomButton
            variant="contained"
            color="info"
            onClick={() => setStep(step + 1)}
          >
            {step === steps.length - 1 ? "Submit" : "Next"}
          </CustomButton>
        </div>
      </div>
    </div>
  );
}

export default PhysicalEdu;
