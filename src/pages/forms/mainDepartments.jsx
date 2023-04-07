import { useState } from "react";
import { Stepper, Step, StepLabel } from "@mui/material";
import { CustomButton } from "@/components/styles";

// Forms
import Form1 from "@/components/forms/1.1.3";
import Form2 from "@/components/forms/1.2.2";
import Form3 from "@/components/forms/1.3.2";
import Form4 from "@/components/forms/1.3.3";
import Form5 from "@/components/forms/2.6.3";
import Form6 from "@/components/forms/3.1.1";
import Form7 from "@/components/forms/3.2.2";
import Form8 from "@/components/forms/3.3.2";
import Form9 from "@/components/forms/3.3.3";
import Form10 from "@/components/forms/3.4.2";
import Form11 from "@/components/forms/3.4.3";
import Form12 from "@/components/forms/3.5.1";
import Form13 from "@/components/forms/3.5.2";
import Form14 from "@/components/forms/5.1.3";
import Form15 from "@/components/forms/5.1.4";
import Form16 from "@/components/forms/5.2.1";
import Form17 from "@/components/forms/5.2.2";
// import Form18 from "@/components/forms/5.2.3";
import Form19 from "@/components/forms/6.3.2";
import Form20 from "@/components/forms/6.3.3";
import Form21 from "@/components/forms/6.3.4";

const steps = [
  "1.1.3",
  "1.2.2",
  "1.3.2",
  "1.3.3",
  "2.6.3",
  "3.1.1",
  "3.2.2",
  "3.3.2",
  "3.3.3",
  "3.4.2",
  "3.4.3",
  "3.5.1",
  "3.5.2",
  "5.1.3",
  "5.1.4",
  "5.2.1",
  "5.2.2",
  "6.3.2",
  "6.3.3",
  "6.3.4"
];

function SignleDepartment() {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState({
    form_1_1_3: [],
    form_1_2_2: [],

  });

  const props = {
    formData,
    setFormData,
  };

  return (
    <div className="">
      <div className="p-8 py-5 flex justify-between items-center bg-titleBg text-white">
        <h1 className="text-2xl font-bold">Main Departments</h1>
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
          {step === 9 && <Form10 {...props} />}
          {step === 10 && <Form11 {...props} />}
          {step === 11 && <Form12 {...props} />}
          {step === 12 && <Form13 {...props} />}
          {step === 13 && <Form14 {...props} />}
          {step === 14 && <Form15 {...props} />}
          {step === 15 && <Form16 {...props} />}
          {step === 16 && <Form17 {...props} />}
          {step === 17 && <Form19 {...props} />}
          {step === 18 && <Form20 {...props} />}
          {step === 19 && <Form21 {...props} />}
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

export default SignleDepartment;
