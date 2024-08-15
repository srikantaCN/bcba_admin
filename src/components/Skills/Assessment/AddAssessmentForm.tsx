import * as React from "react";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import CloseIcon from "@mui/icons-material/Close";

interface AssessmentViewModalProps {
  modalOpen: boolean;
  toggle: React.Dispatch<React.SetStateAction<boolean>>;
}

const AddAssessment: React.FC<AssessmentViewModalProps> = ({
  modalOpen,
  toggle,
}) => {
  const toggleDrawer = (newOpen: boolean) => () => {
    toggle(newOpen);
  };

  return (
    <div>
      <Drawer anchor="right" open={modalOpen} onClose={toggleDrawer(false)}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            padding: "10px",
          }}
        >
          <h2 className="mx-4 mt-2 text-2xl font-semibold text-indigo-600">
            Add Assessments
          </h2>
          <Button
            style={{ color: "black", width: "20px" }}
            onClick={() => toggle(false)}
          >
            <CloseIcon />
          </Button>
        </div>
        <div className="mx-10 my-5 flex flex-col gap-9">
          <div className="">
            <div className="p-6.5">
              <div className="my-4 flex flex-col gap-6 xl:flex-row">
                <div className="w-full xl:w-1/2">
                  <label className="my-3 block text-sm font-medium text-black">
                    Assessment Upload
                  </label>
                  <input
                    type="file"
                    accept=""
                    placeholder="Enter your name"
                    className="border-md ring-gray-300 w-full rounded-lg border-stroke bg-transparent px-5 py-3 text-black outline-none ring-1 ring-inset transition focus:ring-2 focus:ring-inset focus:ring-indigo-600 "
                  />
                </div>

                <div className="w-full xl:w-1/2">
                  <label className="my-3 block text-sm font-medium text-black">
                    Assessment Date
                  </label>
                  <input
                    type="date"
                    placeholder="Choose a date"
                    className="border-md ring-gray-300 w-full rounded-lg border-stroke bg-transparent px-5 py-3 text-black outline-none ring-1 ring-inset transition focus:ring-2 focus:ring-inset focus:ring-indigo-600 "
                  />
                </div>

                {/* <div className="w-full xl:w-1/2">
                  <label className="my-3 block text-sm font-medium text-black">
                    Date of Birth
                  </label>
                  <input
                    type="date"
                    placeholder="Enter your DOB"
                    className="border-md ring-gray-300 w-full rounded-lg border-stroke bg-transparent px-5 py-3 text-black outline-none ring-1 ring-inset transition focus:ring-2 focus:ring-inset focus:ring-indigo-600 "
                  />
                </div> */}
              </div>

              <div className="my-4 flex flex-col gap-6 xl:flex-row">
                
                <div className="w-full">
                  <label className="my-3 block text-sm font-medium text-black">
                    Assessment Name{" "}
                    <span className="text-meta-1">*</span>
                  </label>
                  <select className="border-md ring-gray-300 w-full rounded-lg border-stroke bg-transparent px-5 py-3 text-black outline-none ring-1 ring-inset transition focus:ring-2 focus:ring-inset focus:ring-indigo-600 ">
                    <option>Assessment Name</option>
                    <option>VB-MAPP Milestones</option>
                    <option>VB-MAPP Barriers</option>
                    <option>ABLLS-R</option>
                    <option>PEAK</option>
                    <option>AFLS</option>
                    <option>Vineland 3</option>
                    <option>CFQL-2</option>
                    <option>Other</option>
                  </select>
                </div>

                <div className="w-full">
                  <label className="my-3 block text-sm font-medium text-black">
                    Assessor Name{" "}
                    <span className="text-meta-1">*</span>
                  </label>
                  <select className="border-md ring-gray-300 w-full rounded-lg border-stroke bg-transparent px-5 py-3 text-black outline-none ring-1 ring-inset transition focus:ring-2 focus:ring-inset focus:ring-indigo-600 ">
                    <option>Assessor Name</option>
                    <option>BCBA 1</option>
                    <option>BCBA 2</option>
                    <option>BCBA 3</option>
                  </select>
                </div>
               
              </div>

              <div className="my-4 flex flex-col gap-6 xl:flex-row">
                
                <div className="w-full">
                  <label className="my-3 block text-sm font-medium text-black">
                    Assessment Type{" "}
                    <span className="text-meta-1">*</span>
                  </label>
                  <select className="border-md ring-gray-300 w-full rounded-lg border-stroke bg-transparent px-5 py-3 text-black outline-none ring-1 ring-inset transition focus:ring-2 focus:ring-inset focus:ring-indigo-600 ">
                    <option>Assessment Type</option>
                    <option>Initial Assessment</option>
                    <option>Reassessment</option>
                  </select>
                </div>
               
              </div>
            </div>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "10px",
            gap: 5,
          }}
        >
          <button
            className="rounded-lg border border-red px-5 py-2 text-red hover:bg-red hover:text-white"
            onClick={() => toggle(false)}
          >
            Cancel
          </button>
          <button
            className="rounded-lg border border-blue-700 px-5 py-2 text-blue-700 hover:bg-blue-700 hover:text-white"
            onClick={() => toggle(false)}
          >
            Submit
          </button>
        </div>
      </Drawer>
    </div>
  );
};
export default AddAssessment;
