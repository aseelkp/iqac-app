import { useState } from "react";
import { Stepper, Step, StepLabel, TextField, MenuItem } from "@mui/material";
import { CustomButton } from "@/components/styles";

// Forms
import AwardsAndRecognitions from "@/components/forms/3.4.2";
import ExtensionPrograms from "@/components/forms/3.4.3";
import CapacityBuilding from "@/components/forms/5.1.3";
import GuidanceAndCounselling from "@/components/forms/5.1.4";

import { createNssNcc } from "@/services/dataService";

const steps = [
  "Awards and recognitions",
  "Extension and outreach programmes",
  "Capacity building and skill enhancement programmes",
  "No. of students benefited by guidance and counselling",
];

function NssNcc() {
  const [step, setStep] = useState(0);
  const [clubName, setClubName] = useState("NSS");
  const [formData, setFormData] = useState({
    form_3_4_2: [],
    form_3_4_3: [],
    form_5_1_3: [],
    form_5_1_4: [],
  });

  const props = {
    formData,
    setFormData,
  };

  const handleNext = () => {
    if (step !== steps.length - 1) setStep(step + 1);
    else{ 
      createNssNcc({ clubName, data:formData });
      console.log("submitted", formData);
    }
  };

  return (
    <div className="">
      <div className="p-8 py-5 flex justify-between items-center bg-titleBg text-white">
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
          {step === 0 && (
            <div className="w-1/2 my-5">
            <TextField
              fullWidth
              select
              label="Club Name"
              variant="outlined"
              value={clubName}
              onChange={(e) => setClubName(e.target.value)}
            >
              <MenuItem value="NSS">NSS</MenuItem>
              <MenuItem value="NCC">NCC</MenuItem>
            </TextField>
            </div>
          )}
          {step === 0 && <AwardsAndRecognitions {...props} />}
          {step === 1 && <ExtensionPrograms {...props} />}
          {step === 2 && <CapacityBuilding {...props} />}
          {step === 3 && <GuidanceAndCounselling {...props} />}
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
            onClick={handleNext}
          >
            {step === steps.length - 1 ? "Submit" : "Next"}
          </CustomButton>
        </div>
      </div>
    </div>
  );
}

export default NssNcc;
