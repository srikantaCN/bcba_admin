import { Dispatch, FC, SetStateAction } from "react";
import SchoolIcon from "@mui/icons-material/School";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import ListAltIcon from "@mui/icons-material/ListAlt";
import EventNoteIcon from "@mui/icons-material/EventNote";
import AccessibilityIcon from "@mui/icons-material/Accessibility";
import { Edit as EditIcon } from "@mui/icons-material";

interface ViewFormProps {
  schoolPlacement: {
    schoolType: string[];
    grade: string[];
    startEndTime: string;
    schedule: string;
    totalHours: string;
    hasIEP: boolean;
    iepNotes: string;
  };
  setIsEditSchoolModalOpen: Dispatch<SetStateAction<boolean>>;
}

const SchoolView: FC<ViewFormProps> = ({
  schoolPlacement,
  setIsEditSchoolModalOpen,
}) => {
  return (
    <div className="rounded-lg border border-stroke bg-white p-6 shadow-lg dark:border-strokedark dark:bg-boxdark">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="mb-6 text-2xl font-semibold text-black">
          School Placement Information
        </h2>
        <button
          onClick={() => setIsEditSchoolModalOpen(true)}
          className="border-gray-400 text-gray-500 flex items-center rounded-full border px-3 py-1 transition hover:bg-indigo-100 hover:text-indigo-600"
        >
          <EditIcon className="mr-2" /> Edit
        </button>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <div className="flex items-center space-x-3">
          <SchoolIcon className="text-blue-600" />
          <span className="font-medium text-black">School Type:</span>
          <span className="text-gray-700">
            {schoolPlacement.schoolType.join(", ")}
          </span>
        </div>
        <div className="flex items-center space-x-3">
          <EventNoteIcon className="text-blue-600" />
          <span className="font-medium text-black">Grade:</span>
          <span className="text-gray-700">
            {schoolPlacement.grade.join(", ")}
          </span>
        </div>
        <div className="flex items-center space-x-3">
          <AccessTimeIcon className="text-blue-600" />
          <span className="font-medium text-black">School Hours:</span>
          <span className="text-gray-700">{schoolPlacement.startEndTime}</span>
        </div>
        <div className="flex items-center space-x-3">
          <ListAltIcon className="text-blue-600" />
          <span className="font-medium text-black">Schedule:</span>
          <span className="text-gray-700">{schoolPlacement.schedule}</span>
        </div>
        <div className="flex items-center space-x-3">
          <AccessibilityIcon className="text-blue-600" />
          <span className="font-medium text-black">Total Hours/Week:</span>
          <span className="text-gray-700">{schoolPlacement.totalHours}</span>
        </div>
        <div className="flex items-center space-x-3">
          <span className="font-medium text-black">Has IEP?</span>
          <span className="text-gray-700">
            {schoolPlacement.hasIEP ? "Yes" : "No"}
          </span>
        </div>
        {schoolPlacement.iepNotes && (
          <div className="flex items-center space-x-3 md:col-span-2">
            <span className="font-medium text-black">IEP Notes:</span>
            <span className="text-gray-700">{schoolPlacement.iepNotes}</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default SchoolView;
