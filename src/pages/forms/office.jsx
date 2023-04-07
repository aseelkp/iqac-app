import { useState } from "react";
import { Stepper, Step, StepLabel } from "@mui/material";
import { CustomButton } from "@/components/styles";

// Forms
import Form1 from "@/components/forms/2.2";
import Form2 from "@/components/forms/2.1.1";
import Form3 from "@/components/forms/2.1.2";
import Form4 from "@/components/forms/4.1.3";
import Form5 from "@/components/forms/4.1.4";
import Form6 from "@/components/forms/5.1.1";
import Form7 from "@/components/forms/6.2.3";
import Form8 from "@/components/forms/6.3.2";
import Form9 from "@/components/forms/6.4.2";

const steps = [
  "2.2",
  "2.1.1",
  "2.1.2",
  "4.1.3",
  "4.1.4 & 4.4.1",
  "5.1.1 & 5.1.2",
  "6.2.3",
  "6.3.2",
  "6.4.2",
];

function ClubsandAsso() {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState({
    form_2_2: [],
    form_2_1_1: [],
    form_2_1_2: [],
    form_4_1_3: [],
    form_4_1_4: [],
    form_5_1_1: [],
    form_6_2_3: [],
    form_6_3_2: [],
    form_6_4_2: [],
  });

  const props = {
    formData,
    setFormData,
  };

  return (
    <div className="">
      <div className="p-8 py-5 flex justify-between items-center bg-titleBg text-white">
        <h1 className="text-2xl font-bold">Office</h1>
      </div>
      <div className="m-8">
        <Stepper activeStep={step} alternativeLabel className="my-5 mt-7">
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel></StepLabel>
            </Step>
          ))}
        </Stepper>
        {/* Forms */}
        <div>
            {step === 0 && <Form1 {...props} />}
            {step === 1 && <Form2 {...props} />}
            {step === 2 && <Form3 {...props} />}
            {step === 3 && <Form4 {...props} />}
            {step === 4 && <Form5 {...props} />}
            {step === 5 && <Form6 {...props} />}
            {step === 6 && <Form7 {...props} />}
            {step === 7 && <Form8 {...props} />}
            {step === 8 && <Form9 {...props} />}
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

export default ClubsandAsso;
