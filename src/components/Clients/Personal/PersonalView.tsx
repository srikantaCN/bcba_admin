import React, { Dispatch, SetStateAction } from "react";

import PersonIcon from "@mui/icons-material/Person";
import CakeIcon from "@mui/icons-material/Cake";
import EventIcon from "@mui/icons-material/Event";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import EditIcon from "@mui/icons-material/Edit";
import Button from "@mui/material/Button";

import { formData } from "@/types/ClientPersonalInfo";

interface FormDataProps {
  formData: formData;
  setIsEditPersonal: Dispatch<SetStateAction<boolean>>;
}
const PersonalView: React.FC<FormDataProps> = ({
  formData: participant,
  setIsEditPersonal,
}) => {
  return (
    <div className="flex flex-col gap-9">
      <div className="rounded-lg border border-stroke bg-white px-5 py-6 shadow-lg dark:border-strokedark dark:bg-boxdark">
        <div className="mb-5 flex items-center justify-between">
          <h2 className="mb-3 text-2xl font-semibold text-black">
            Participant Information
          </h2>
          <button
            onClick={() => setIsEditPersonal(true)}
            className="border-gray-400 text-gray-500 flex items-center rounded-full border px-3 py-1 transition hover:bg-indigo-100 hover:text-indigo-600"
          >
            <EditIcon className="mr-2" /> Edit
          </button>
          {/* <Button
            onClick={() => setIsEditPersonal(true)}
            size="small"
            variant="outlined"
            startIcon={<EditIcon />}
            className="border-gray-400 text-gray-600 transition-all hover:border-indigo-600 hover:bg-indigo-600 hover:text-white"
            sx={{
              color: "primary.main",
              borderColor: "gray",
              borderRadius: "20px",
              "&:hover": {
                backgroundColor: "primary.main",
                color: "white",
                borderColor: "primary.main",
              },
            }}
          >
            Edit
          </Button> */}
        </div>
        <div className="space-y-8">
          {/* Participant Details */}
          <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
            <div className="flex items-center gap-3">
              <PersonIcon className="text-indigo-600" />
              <div>
                <h3 className="text-gray-600 text-sm font-medium">
                  Participant Name
                </h3>
                <p className="text-gray-900 mt-1 text-base font-semibold">
                  {participant.participantName}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <CakeIcon className="text-indigo-600" />
              <div>
                <h3 className="text-gray-600 text-sm font-medium">
                  Date of Birth
                </h3>
                <p className="text-gray-900 mt-1 text-base font-semibold">
                  {participant.dateOfBirth}
                </p>
              </div>
            </div>
          </div>

          {/* Assessment Dates */}
          <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
            <div className="flex items-center gap-3">
              <EventIcon className="text-indigo-600" />
              <div>
                <h3 className="text-gray-600 text-sm font-medium">
                  Date of Initial Assessment
                </h3>
                <p className="text-gray-900 mt-1 text-base font-semibold">
                  {participant.dateOfInitialAssessment}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <EventIcon className="text-indigo-600" />
              <div>
                <h3 className="text-gray-600 text-sm font-medium">
                  Date of Current Reassessment
                </h3>
                <p className="text-gray-900 mt-1 text-base font-semibold">
                  {participant.dateOfCurrentReassessment}
                </p>
              </div>
            </div>
          </div>

          {/* Family Structure */}
          <div className="space-y-3">
            <h3 className="text-gray-600 text-sm font-medium">
              Current Family Structure
            </h3>
            <p className="text-gray-900 text-base font-semibold">
              {participant.currentFamilyStructure}
            </p>
          </div>

          {/* Household Details */}
          <div className="space-y-3">
            <h3 className="text-gray-600 text-sm font-medium">
              Other Household Details
            </h3>
            <p className="text-gray-900 text-base font-semibold">
              {participant.otherHouseholdDetails}
            </p>
          </div>

          {/* Parent/Guardian Contact */}
          <div>
            <h3 className="mb-3 border-b-2 border-indigo-200 pb-2 text-lg font-medium text-indigo-600">
              Parent/Guardian Contact
            </h3>
            <div className="grid grid-cols-1 gap-6 xl:grid-cols-3">
              <div className="flex items-center gap-3">
                <PersonIcon className="text-indigo-600" />
                <div>
                  <h4 className="text-gray-600 text-sm font-medium">Name</h4>
                  <p className="text-gray-900 mt-1 text-base font-semibold">
                    {participant.parentName}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <PhoneIcon className="text-indigo-600" />
                <div>
                  <h4 className="text-gray-600 text-sm font-medium">Phone</h4>
                  <p className="text-gray-900 mt-1 text-base font-semibold">
                    {participant.parentPhone}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <EmailIcon className="text-indigo-600" />
                <div>
                  <h4 className="text-gray-600 text-sm font-medium">Email</h4>
                  <p className="text-gray-900 mt-1 text-base font-semibold">
                    {participant.parentEmail}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalView;
