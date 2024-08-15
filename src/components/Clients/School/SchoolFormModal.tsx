import React, { useState } from "react";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import CloseIcon from "@mui/icons-material/Close";

import { v4 as uuidv4 } from "uuid";

import { schoolSettings } from "@/utils/Clients";
import { grades } from "@/utils/Clients";
import { Grid } from "@mui/material";

interface PersonalViewModalProps {
  modalOpen: boolean;
  toggle: React.Dispatch<React.SetStateAction<boolean>>;
}

interface Option {
  id: string;
  label: string;
}

const options: Option[] = [
  { id: uuidv4(), label: "Yes" },
  { id: uuidv4(), label: "No" },
];

const SchoolFormModal = ({ modalOpen, toggle }: PersonalViewModalProps) => {
  const [isChecked, setIsChecked] = useState<string>("");
  const [isRadioChecked, setIsRadioChecked] = useState<string>("");

  const handleRadioChange = (value: string) => {
    setIsRadioChecked(value);
  };

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
            School Information
          </h2>
          <Button
            style={{ color: "black", width: "20px" }}
            onClick={() => toggle(false)}
          >
            <CloseIcon />
          </Button>
        </div>
        <div className="mb-10 flex flex-col gap-9">
          {/* <!-- Sign In Form --> */}
          <div className="m-5">
            <label className="border-gray-500 my-3 block border-b-2 pb-3  text-lg font-medium text-black">
              School Placement
            </label>
            <label className="my-3 block text-lg font-medium text-black">
              School Type
            </label>
            <Grid container spacing={1} className="my-3 ">
              {schoolSettings?.map((settings) => {
                return (
                  <Grid item xs={4} className="my-4" key={settings?.id}>
                    <label
                      htmlFor="checkboxLabelOne"
                      className="flex cursor-pointer select-none items-center"
                    >
                      <div className="">
                        <input
                          name={settings?.name}
                          type="checkbox"
                          id="checkboxLabelOne"
                          className="border-md ring-gray-300 sr-only w-full rounded-lg border-stroke bg-transparent px-5 py-3 text-black outline-none ring-1 ring-inset transition focus:ring-2 focus:ring-inset focus:ring-indigo-600 "
                          // value={isChecked}
                          // onChange={() => {
                          //   setIsChecked(!isChecked);
                          // }}
                        />
                        <div
                          className={`mr-4 flex h-5 w-5 items-center justify-center rounded border ${
                            isChecked &&
                            "border-blue-900 bg-gray dark:bg-transparent"
                          }`}
                        >
                          <span
                            className={`h-2.5 w-2.5 rounded-sm ${
                              isChecked && "bg-blue-900"
                            }`}
                          ></span>
                        </div>
                      </div>
                      {settings?.name}
                    </label>
                  </Grid>
                );
              })}
            </Grid>

            <label className="my-3 block text-lg font-medium text-black">
              Grade
            </label>
            <Grid container spacing={1} className="my-3 ">
              {grades?.map((grade) => {
                return (
                  <Grid item xs={2} className="my-4" key={grade?.id}>
                    <label
                      htmlFor="checkboxLabelOne"
                      className="flex cursor-pointer select-none items-center"
                    >
                      <div className="">
                        <input
                          name={grade?.name}
                          type="checkbox"
                          id="checkboxLabelOne"
                          className="border-md ring-gray-300 sr-only w-full rounded-lg border-stroke bg-transparent px-5 py-3 text-black outline-none ring-1 ring-inset transition focus:ring-2 focus:ring-inset focus:ring-indigo-600 "
                          // value={isChecked}
                          // onChange={() => {
                          //   setIsChecked(!isChecked);
                          // }}
                        />
                        <div
                          className={`mr-4 flex h-5 w-5 items-center justify-center rounded border ${
                            isChecked &&
                            "border-blue-900 bg-gray dark:bg-transparent"
                          }`}
                        >
                          <span
                            className={`h-2.5 w-2.5 rounded-sm ${
                              isChecked && "bg-blue-900"
                            }`}
                          ></span>
                        </div>
                      </div>
                      {grade?.name}
                    </label>
                  </Grid>
                );
              })}
            </Grid>
            <div className="my-4 flex flex-col gap-6 ">
              <div className="w-full">
                <label className="my-3 block text-sm font-medium text-black">
                  Start and end time of school hours
                </label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="border-md ring-gray-300 w-full rounded-lg border-stroke bg-transparent px-5 py-3 text-black outline-none ring-1 ring-inset transition focus:ring-2 focus:ring-inset focus:ring-indigo-600 "
                />
              </div>

              <div className="w-full">
                <label className="my-3 block text-sm font-medium text-black">
                  Schedule of academic activities
                </label>
                <input
                  type="text"
                  placeholder="Schedule of academic activities"
                  className="border-md ring-gray-300 w-full rounded-lg border-stroke bg-transparent px-5 py-3 text-black outline-none ring-1 ring-inset transition focus:ring-2 focus:ring-inset focus:ring-indigo-600 "
                />
              </div>
              <div className="w-full">
                <label className="my-3 block text-sm font-medium text-black">
                  Total number of hours spent in school per week
                </label>
                <input
                  type="tel"
                  placeholder="Total number of hours spent in school per week"
                  className="border-md ring-gray-300 w-full rounded-lg border-stroke bg-transparent px-5 py-3 text-black outline-none ring-1 ring-inset transition focus:ring-2 focus:ring-inset focus:ring-indigo-600 "
                />
              </div>
              <div className="w-full">
                <label className="my-3 block text-sm font-medium text-black">
                  Has IEP?
                </label>
                <div className="flex flex-wrap items-center gap-5.5">
                  {options.map((option) => (
                    <div key={option.id}>
                      <label className="relative flex cursor-pointer select-none items-center gap-2 text-sm font-medium text-black dark:text-white">
                        <input
                          className="sr-only"
                          type="radio"
                          name="roleSelect"
                          id={option.id}
                          onChange={() => handleRadioChange(option.id)}
                        />
                        <span
                          className={`flex h-5 w-5 items-center justify-center rounded-full border ${
                            isRadioChecked === option.id
                              ? "border-primary"
                              : "border-body"
                          }`}
                        >
                          <span
                            className={`h-2.5 w-2.5 rounded-full bg-primary ${
                              isRadioChecked === option.id ? "flex" : "hidden"
                            }`}
                          ></span>
                        </span>
                        {option.label}
                      </label>
                    </div>
                  ))}
                </div>
                <div className="w-full">
                  <label className="my-3 block text-sm font-medium text-black">
                    IEP Notes
                  </label>
                  <textarea
                    placeholder="IEP Notes"
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
export default SchoolFormModal;
