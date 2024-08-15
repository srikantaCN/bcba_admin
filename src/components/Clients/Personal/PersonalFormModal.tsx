import * as React from "react";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import CloseIcon from "@mui/icons-material/Close";

interface PersonalViewModalProps {
  modalOpen: boolean;
  toggle: React.Dispatch<React.SetStateAction<boolean>>;
}
const PersonalViewModal: React.FC<PersonalViewModalProps> = ({
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
            Participant Information
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
                    Participant Name
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your name"
                    className="border-md ring-gray-300 w-full rounded-lg border-stroke bg-transparent px-5 py-3 text-black outline-none ring-1 ring-inset transition focus:ring-2 focus:ring-inset focus:ring-indigo-600 "
                  />
                </div>

                <div className="w-full xl:w-1/2">
                  <label className="my-3 block text-sm font-medium text-black">
                    Date of Birth
                  </label>
                  <input
                    type="date"
                    placeholder="Enter your DOB"
                    className="border-md ring-gray-300 w-full rounded-lg border-stroke bg-transparent px-5 py-3 text-black outline-none ring-1 ring-inset transition focus:ring-2 focus:ring-inset focus:ring-indigo-600 "
                  />
                </div>
              </div>

              <div className="my-4 flex flex-col gap-6 xl:flex-row">
                <div className="w-full xl:w-1/2">
                  <label className="my-3 block text-sm font-medium text-black">
                    Date of Initial Assessment
                  </label>
                  <input
                    type="date"
                    placeholder="Choose a date"
                    className="border-md ring-gray-300 w-full rounded-lg border-stroke bg-transparent px-5 py-3 text-black outline-none ring-1 ring-inset transition focus:ring-2 focus:ring-inset focus:ring-indigo-600 "
                  />
                </div>

                <div className="w-full xl:w-1/2">
                  <label className="my-3 block text-sm font-medium text-black">
                    Date of Current Reassessment
                  </label>
                  <input
                    type="date"
                    placeholder="Choose a date"
                    className="border-md ring-gray-300 w-full rounded-lg border-stroke bg-transparent px-5 py-3 text-black outline-none ring-1 ring-inset transition focus:ring-2 focus:ring-inset focus:ring-indigo-600 "
                  />
                </div>
              </div>
              <div className="mb-2 flex flex-col gap-6 xl:flex-row">
                <div className="w-full">
                  <label className="my-3 block text-sm font-medium text-black">
                    Current Family Structure{" "}
                    <span className="text-meta-1">*</span>
                  </label>
                  <select className="border-md ring-gray-300 w-full rounded-lg border-stroke bg-transparent px-5 py-3 text-black outline-none ring-1 ring-inset transition focus:ring-2 focus:ring-inset focus:ring-indigo-600 ">
                    <option>Select</option>
                    <option>Single-Parent Household</option>
                    <option>Two-parent Household</option>
                    <option>Lives with Grandparents</option>
                    <option>Foster Care</option>
                  </select>
                </div>
              </div>
              <div className="w-full">
                <label className="my-3 block text-sm font-medium text-black">
                  Other Household Details <span className="text-meta-1">*</span>
                </label>
                <textarea
                  placeholder="Other Household Details"
                  className="border-md ring-gray-300 w-full rounded-lg border-stroke bg-transparent px-5 py-3 text-black outline-none ring-1 ring-inset transition focus:ring-2 focus:ring-inset focus:ring-indigo-600 "
                />
              </div>
              <label className="border-gray-500 my-4 block border-b-2 pb-3 text-lg font-medium text-black">
                Parent/Guardian Contact
              </label>
              <div className="my-4 flex flex-col gap-6 xl:flex-row ">
                <div className="w-full xl:w-1/3">
                  <label className="mb-3 block text-sm font-medium text-black">
                    Name <span className="text-meta-1">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your Parent's Name"
                    className="border-md ring-gray-300 w-full rounded-lg border-stroke bg-transparent px-5 py-3 text-black outline-none ring-1 ring-inset transition focus:ring-2 focus:ring-inset focus:ring-indigo-600 "
                  />
                </div>
                <div className="w-full xl:w-1/3">
                  <label className="mb-3 block text-sm font-medium text-black">
                    Phone <span className="text-meta-1">*</span>
                  </label>
                  <input
                    type="number"
                    placeholder="Enter Contact Number"
                    className="border-md ring-gray-300 w-full rounded-lg border-stroke bg-transparent px-5 py-3 text-black outline-none ring-1 ring-inset transition focus:ring-2 focus:ring-inset focus:ring-indigo-600 "
                  />
                </div>
                <div className="w-full xl:w-1/3">
                  <label className="mb-3 block text-sm font-medium text-black">
                    Email <span className="text-meta-1">*</span>
                  </label>
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    className="border-md ring-gray-300 w-full rounded-lg border-stroke bg-transparent px-5 py-3 text-black outline-none ring-1 ring-inset transition focus:ring-2 focus:ring-inset focus:ring-indigo-600 "
                  />
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
export default PersonalViewModal;
