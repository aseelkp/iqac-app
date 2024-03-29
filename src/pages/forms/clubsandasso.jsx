import { useState } from "react";
import { Stepper, Step, StepLabel, TextField } from "@mui/material";
import { CustomButton } from "@/components/styles";
import { createClub } from "@/services/dataService";
import toast from "react-hot-toast";
import { useRouter } from "next/router";

// Forms
import Workshops from "@/components/forms/3.2.2";
import AwardsAndRecognitions from "@/components/forms/3.4.2";
import ExtensionPrograms from "@/components/forms/3.4.3";
import CapacityBuilding from "@/components/forms/5.1.3";
import GuidanceAndCounselling from "@/components/forms/5.1.4";

const steps = [
  "Workshops or seminars",
  "Awards and recognitions",
  "Extension and outreach programmes",
  "Capacity building and skill enhancement programmes",
  "No. of students benefited by guidance and counselling",
];

function ClubsandAsso() {
  const router = useRouter();
  const [step, setStep] = useState(0);
  const [clubName, setClubName] = useState();
  const [formData, setFormData] = useState({
    form_3_2_2: [],
    form_3_4_2: [],
    form_3_4_3: [],
    form_5_1_3: [],
    form_5_1_4: [],
  });

  const props = {
    formData,
    setFormData,
  };

  const handleNext = async() => {
    if (step !== steps.length - 1) setStep(step + 1);
    else {
      try {
        if (!clubName) return toast.error("Please enter club name in step 1");
        await createClub({ clubName, data: formData });
        toast.success("Form Submitted successfully");
        router.push("/dashboard");
      } catch (error) {
        console.log(error);
        toast.error("Something went wrong");
      }
    }
  };

  return (
    <div className="">
      <div className="p-8 py-5 flex justify-between items-center bg-titleBg text-white">
        <h1 className="text-2xl font-bold">Clubs and Associations</h1>
      </div>
      <div className="m-8">
        <Stepper activeStep={step} alternativeLabel className="my-5 mt-7">
          {steps.map((label, index) => (
            <Step key={label}>
              <StepLabel className="cursor-pointer" onClick={() => setStep(index)}>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
        {/* Forms */}
        <div>
          {step === 0 && (
            <div className="w-1/2 my-5">
              <TextField
                fullWidth
                label="Club Name"
                variant="outlined"
                value={clubName}
                onChange={(e) => setClubName(e.target.value)}
              />
            </div>
          )}
          {step === 0 && <Workshops {...props} />}
          {step === 1 && <AwardsAndRecognitions {...props} />}
          {step === 2 && <ExtensionPrograms {...props} />}
          {step === 3 && <CapacityBuilding {...props} />}
          {step === 4 && <GuidanceAndCounselling {...props} />}
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
          <CustomButton variant="contained" color="info" onClick={handleNext}>
            {step === steps.length - 1 ? "Submit" : "Next"}
          </CustomButton>
        </div>
      </div>
    </div>
  );
}

export default ClubsandAsso;
