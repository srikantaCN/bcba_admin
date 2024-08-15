import * as React from "react";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import CloseIcon from "@mui/icons-material/Close";

import { v4 as uuidv4 } from "uuid";

import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";

interface PersonalViewModalProps {
  modalOpen: boolean;
  toggle: React.Dispatch<React.SetStateAction<boolean>>;
}

interface serviceHistoryProps {
  id: string;
  providerName: string;
  startDate: string;
  endDate: string;
  outcomes: string;
}

const MedicallViewModal: React.FC<PersonalViewModalProps> = ({
  modalOpen,
  toggle,
}) => {
  const initialAbaServiceHistory: serviceHistoryProps = {
    id: uuidv4(),
    providerName: "",
    startDate: "",
    endDate: "",
    outcomes: "",
  };

  const [abaServicesHistory, setAbaServicesHistory] = React.useState([
    initialAbaServiceHistory,
  ]);

  const toggleDrawer = (newOpen: boolean) => () => {
    toggle(newOpen);
  };

  const handleAddService = () => {
    const newService = [...abaServicesHistory];
    newService.push(initialAbaServiceHistory);
    console.log("object", newService);
    setAbaServicesHistory(newService);
  };

  const handleDelete = (index: number) => {
    console.log("called");
    const newServices = [...abaServicesHistory];
    const updatedServices = newServices.filter((_, i) => i !== index);
    setAbaServicesHistory(updatedServices);
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
            Medical Information
          </h2>
          <Button
            style={{ color: "black", width: "20px" }}
            onClick={() => toggle(false)}
          >
            <CloseIcon />
          </Button>
        </div>
        <div className="mx-10 my-5 ">
          <div className="mb-2 flex flex-col gap-6 xl:flex-row">
            <div className="w-full">
              <label className="my-2 block text-sm font-medium text-black">
                Medications <span className="text-meta-1">*</span>
              </label>
              <span className="text-gray-600 text-sm">
                Include ALL medications (OTC, Psych meds or behavioral meds),
                dosage and prescribing physician.
              </span>
              <textarea
                placeholder="Medications"
                className="border-md ring-gray-300 mt-3 w-full rounded-lg border-stroke bg-transparent px-5 py-3 text-black outline-none ring-1 ring-inset transition focus:ring-2 focus:ring-inset focus:ring-indigo-600 "
              />
            </div>
          </div>
          <div className="mb-2 flex flex-col gap-6 xl:flex-row">
            <div className="w-full">
              <label className="my-3 block text-sm font-medium text-black">
                Medical History <span className="text-meta-1">*</span>
              </label>
              <textarea
                placeholder="Medical History"
                className="border-md ring-gray-300 w-full rounded-lg border-stroke bg-transparent px-5 py-3 text-black outline-none ring-1 ring-inset transition focus:ring-2 focus:ring-inset focus:ring-indigo-600 "
              />
            </div>
          </div>
          <div className="flex flex-col">
            {abaServicesHistory.map((item, index, arr) => {
              return (
                <div
                  key={item.id} // Unique key to avoid React warnings
                  className="my-5 rounded-lg bg-gray-3 p-6 shadow-lg"
                >
                  <div className="mb-2 flex flex-col gap-6 xl:flex-row">
                    <div className="w-full xl:w-1/3">
                      <label className="my-3 block text-sm font-medium text-black">
                        Provider Name
                      </label>
                      <input
                        type="text"
                        placeholder="Enter Provider name"
                        value={item.providerName}
                        onChange={(e) => {
                          const newServices = [...abaServicesHistory];
                          newServices[index].providerName = e.target.value;
                          setAbaServicesHistory(newServices);
                        }}
                        className="border-md ring-gray-300 w-full rounded-lg border-stroke bg-transparent px-5 py-3 text-black outline-none ring-1 ring-inset transition focus:ring-2 focus:ring-inset focus:ring-indigo-600"
                      />
                    </div>
                    <div className="w-full xl:w-1/3">
                      <label className="my-3 block text-sm font-medium text-black">
                        Start Date
                      </label>
                      <input
                        type="date"
                        placeholder="Enter Start Date"
                        value={item.startDate}
                        onChange={(e) => {
                          const newServices = [...abaServicesHistory];
                          newServices[index].startDate = e.target.value;
                          setAbaServicesHistory(newServices);
                        }}
                        className="border-md ring-gray-300 w-full rounded-lg border-stroke bg-transparent px-5 py-3 text-black outline-none ring-1 ring-inset transition focus:ring-2 focus:ring-inset focus:ring-indigo-600"
                      />
                    </div>
                    <div className="w-full xl:w-1/3">
                      <label className="my-3 block text-sm font-medium text-black">
                        End Date
                      </label>
                      <input
                        type="date"
                        placeholder="Enter End Date"
                        value={item.endDate}
                        onChange={(e) => {
                          const newServices = [...abaServicesHistory];
                          newServices[index].endDate = e.target.value;
                          setAbaServicesHistory(newServices);
                        }}
                        className="border-md ring-gray-300 w-full rounded-lg border-stroke bg-transparent px-5 py-3 text-black outline-none ring-1 ring-inset transition focus:ring-2 focus:ring-inset focus:ring-indigo-600"
                      />
                    </div>
                  </div>
                  <div className="my-4 w-full">
                    <label className="my-3 block text-sm font-medium text-black">
                      Outcomes
                    </label>
                    <textarea
                      placeholder="Enter Outcomes"
                      value={item.outcomes}
                      onChange={(e) => {
                        const newServices = [...abaServicesHistory];
                        newServices[index].outcomes = e.target.value;
                        setAbaServicesHistory(newServices);
                      }}
                      className="border-md ring-gray-300 w-full rounded-lg border-stroke bg-transparent px-5 py-3 text-black outline-none ring-1 ring-inset transition focus:ring-2 focus:ring-inset focus:ring-indigo-600"
                    />
                  </div>
                  <div className="my-4 flex w-full justify-end gap-4 border-b p-4">
                    {index !== 0 && (
                      <button
                        type="button"
                        className="text-red-700 border-red-600 hover:bg-red-50 flex items-center rounded-lg border px-3 py-2 text-sm font-medium"
                        onClick={() => handleDelete(index)}
                      >
                        <DeleteIcon className="mr-1" /> Delete
                      </button>
                    )}
                    {index === arr.length - 1 && (
                      <button
                        type="button"
                        className="flex items-center rounded-lg border border-blue-600 px-3 py-2 text-sm font-medium text-blue-600 hover:bg-blue-50"
                        onClick={handleAddService}
                      >
                        <AddIcon className="mr-1" /> Add Service
                      </button>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
          <div className="my-4 flex flex-col gap-6 xl:flex-row">
            <div className="w-full">
              <label className="my-3 flex flex-col text-sm font-medium text-black">
                <span>Other Mental Health Services</span>
                <span className="text-gray-500">
                  (Include any mental health hospitalizations)
                </span>
              </label>
              <input
                type="text"
                placeholder="Enter Provider name"
                className="border-md ring-gray-300 w-full rounded-lg border-stroke bg-transparent px-5 py-3 text-black outline-none ring-1 ring-inset transition focus:ring-2 focus:ring-inset focus:ring-indigo-600 "
              />
            </div>
          </div>
          <div className="my-4 w-full">
            <label className="my-3 block text-sm font-medium text-black">
              Other Services
            </label>
            <textarea
              placeholder="• e.g., Occupational therapy, speech
                                        therapy, physical therapy, feeding
                                        therapy, etc.
                                        • Include how many sessions per
                                        week and how many hours overall.
                                        • Indicate NA if none."
              className="border-md ring-gray-300 w-full rounded-lg border-stroke bg-transparent px-5 py-3 text-black outline-none ring-1 ring-inset transition focus:ring-2 focus:ring-inset focus:ring-indigo-600 "
            />
          </div>
          <div className="my-4 w-full">
            <label className="my-3 flex flex-col text-sm font-medium text-black">
              <span>Coordination of care with other providers</span>
              <span className="text-gray-500">
                (Psychologists, psychiatrists, OT, SLP, PT, School personnel,
                etc.)
              </span>
            </label>
            <textarea
              placeholder="Enter end date"
              className="border-md ring-gray-300 w-full rounded-lg border-stroke bg-transparent px-5 py-3 text-black outline-none ring-1 ring-inset transition focus:ring-2 focus:ring-inset focus:ring-indigo-600 "
            />
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
export default MedicallViewModal;
