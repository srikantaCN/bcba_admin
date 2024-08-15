import React, { Dispatch, SetStateAction } from "react";
import {
  Edit as EditIcon,
  Medication as MedicationIcon,
  History as HistoryIcon,
  HealthAndSafety as HealthIcon,
} from "@mui/icons-material";

interface ABAService {
  id: string;
  providerName: string;
  startDate: string;
  endDate: string;
  outcomes: string;
}

interface ViewDataProps {
  medications: string;
  medicalHistory: string;
  abaServicesHistory: ABAService[];
  mentalHealthServices: string;
  otherServices: string;
  coordinationOfCare: string;
  setIsEditMedicalModalOpen: Dispatch<SetStateAction<boolean>>;
}

const MedicalView: React.FC<ViewDataProps> = ({
  medications,
  medicalHistory,
  abaServicesHistory,
  mentalHealthServices,
  otherServices,
  coordinationOfCare,
  setIsEditMedicalModalOpen,
}) => {
  return (
    <div className="rounded-lg bg-white p-6 shadow-lg">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="mx-4 mt-2 text-2xl font-semibold text-black">
          Medical Information
        </h2>
        <button
          onClick={() => setIsEditMedicalModalOpen(true)}
          className="border-gray-400 text-gray-500 flex items-center rounded-full border px-3 py-1 transition hover:bg-indigo-100 hover:text-indigo-600"
        >
          <EditIcon className="mr-2" /> Edit
        </button>
      </div>

      <div className="grid grid-cols-2 gap-8">
        <div className="flex items-start">
          <MedicationIcon className="mr-3 text-blue-600" />
          <div>
            <h3 className="text-gray-600 text-sm font-medium text-black">
              Medications
            </h3>
            <p className="text-gray-700 text-sm">{medications}</p>
          </div>
        </div>

        <div className="flex items-start">
          <HistoryIcon className="mr-3 text-blue-600" />
          <div>
            <h3 className="text-gray-600 text-sm font-medium text-black">
              Medical History
            </h3>
            <p className="text-gray-700 text-sm">{medicalHistory}</p>
          </div>
        </div>

        <div className="flex items-start">
          <HealthIcon className="mr-3 text-blue-600" />
          <div>
            <h3 className="text-gray-600 text-sm font-medium text-black">
              Mental Health Services
            </h3>
            <p className="text-gray-700 text-sm">{mentalHealthServices}</p>
          </div>
        </div>

        <div className="flex items-start">
          <HealthIcon className="mr-3 text-blue-600" />
          <div>
            <h3 className="text-gray-600 text-sm font-medium text-black">
              Other Services
            </h3>
            <p className="text-gray-700 text-sm">{otherServices}</p>
          </div>
        </div>

        <div className="col-span-2 flex items-start">
          <HealthIcon className="mr-3 text-blue-600" />
          <div>
            <h3 className="text-gray-600 text-sm font-medium text-black">
              Coordination of Care
            </h3>
            <p className="text-gray-700 text-sm">{coordinationOfCare}</p>
          </div>
        </div>
      </div>

      <div className="mt-8">
        <h3 className="text-gray-700 mb-4 text-lg font-semibold">
          ABA Services History
        </h3>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {abaServicesHistory.map((service, index) => (
            <div
              key={index}
              className="border-gray-200 transform rounded-lg border bg-white p-4 shadow-md transition duration-300 hover:scale-105 hover:shadow-lg"
            >
              <h4 className="mb-2 text-lg font-medium text-black ">
                Provider:{" "}
                <span className="text-indigo-600">{service.providerName}</span>
              </h4>
              <p className="text-gray-600 text-sm">
                Start Date: {service.startDate}
              </p>
              <p className="text-gray-600 text-sm">
                End Date: {service.endDate}
              </p>
              <p className="text-gray-600 text-sm">
                Outcomes: {service.outcomes}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MedicalView;
