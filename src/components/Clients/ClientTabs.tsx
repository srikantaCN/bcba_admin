"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { Grid } from "@mui/material";
import { usePathname } from "next/navigation";

import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";

import DefaultLayout from "@/components/Layouts/DefaultLayout";
import { schoolSettings } from "@/utils/Clients";
import { grades } from "@/utils/Clients";

interface serviceHistoryProps {
  id: string;
  providerName: string;
  startDate: string;
  endDate: string;
  outcomes: string;
}

const tabs = [
  {
    name: "Personal",
    value: 1,
  },
  {
    name: "School",
    value: 2,
  },
  {
    name: "Medical",
    value: 3,
  },
  {
    name: "Documents",
    value: 4,
  },
  {
    name: "Others",
    value: 5,
  },
];

const ClientTabs: React.FC = () => {
  const paths = usePathname();
  const initialAbaServiceHistory: serviceHistoryProps = {
    id: uuidv4(),
    providerName: "",
    startDate: "",
    endDate: "",
    outcomes: "",
  };

  const [openTab, setOpenTab] = useState<number | undefined>(1);
  const [abaServicesHistory, setAbaServicesHistory] = useState([
    initialAbaServiceHistory,
  ]);
  const [isChecked, setIsChecked] = useState(false);

  const activeClasses = "text-primary border-blue-900";
  const inactiveClasses = "border-transparent";

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

  useEffect(() => {
    if (paths) {
      const endPoint = paths.split("/");
      console.log(
        tabs.find(
          (tab) =>
            tab?.name?.toLowerCase() ===
            endPoint[endPoint.length - 1]?.toLowerCase(),
        ),
        endPoint,
        endPoint[endPoint.length - 1],
      );
      setOpenTab(
        tabs.find(
          (tab) =>
            tab?.name?.toLowerCase() ===
            endPoint[endPoint.length - 1]?.toLowerCase(),
        )?.value,
      );
    }
  }, [paths]);
  return (
    <>
      <div className="mb-6 flex flex-wrap gap-5 border-b border-stroke dark:border-strokedark sm:gap-10">
        {tabs?.map((tab, index) => {
          return (
            <Link
              key={`${tab.value}-${index}`}
              href="#"
              className={`border-b-2 py-4 text-sm font-medium hover:text-primary md:text-base ${
                openTab === index + 1 ? activeClasses : inactiveClasses
              }`}
              onClick={() => setOpenTab(index + 1)}
            >
              {tab?.name}
            </Link>
          );
        })}
      </div>

      <div>
        <div
          className={`h-[600px] overflow-y-scroll px-5 leading-relaxed ${
            openTab === 1 ? "block" : "hidden"
          }`}
        >
          <div className="flex flex-col gap-9">
            <div className="rounded-lg border  border-stroke bg-white px-5 shadow-lg dark:border-strokedark dark:bg-boxdark">
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
        </div>
        <div
          className={`h-[600px] overflow-y-scroll   px-5 leading-relaxed ${
            openTab === 3 ? "block" : "hidden"
          }`}
        >
          <div className="flex flex-col gap-9">
            <div className="rounded-lg border  border-stroke bg-white p-5 shadow-lg dark:border-strokedark dark:bg-boxdark">
              <div className="mb-2 flex flex-col gap-6 xl:flex-row">
                <div className="w-full">
                  <label className="my-3 block text-sm font-medium text-black">
                    Current Family Structure{" "}
                    <span className="text-meta-1">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Current Family Structure"
                    className="border-md ring-gray-300 w-full rounded-lg border-stroke bg-transparent px-5 py-3 text-black outline-none ring-1 ring-inset transition focus:ring-2 focus:ring-inset focus:ring-indigo-600 "
                  />
                </div>
              </div>
              <div className="mb-2 flex flex-col gap-6 xl:flex-row">
                <div className="w-full">
                  <label className="my-2 block text-sm font-medium text-black">
                    Medications <span className="text-meta-1">*</span>
                  </label>
                  <span className="text-gray-600 text-sm">
                    Include ALL medications (OTC, Psych meds or behavioral
                    meds), dosage and prescribing physician.
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
            </div>
          </div>
        </div>
        <div
          className={`h-[600px] overflow-y-scroll   px-5 leading-relaxed ${
            openTab === 2 ? "block" : "hidden"
          }`}
        >
          <div className="mb-10 flex flex-col gap-9">
            {/* <!-- Sign In Form --> */}
            <div className="mb-5 rounded-lg border border-stroke bg-white px-5 shadow-lg dark:border-stroke  dark:bg-boxdark">
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
              </div>
            </div>
          </div>
        </div>
        <div>
          <div
            className={`h-[600px] overflow-y-scroll px-5 leading-relaxed ${
              openTab === 4 ? "block" : "hidden"
            }`}
          >
            <div className="flex flex-col gap-9">
              <div className="rounded-lg border border-stroke bg-white p-5 shadow-lg dark:border-strokedark dark:bg-boxdark">
                <div className="flex flex-col">
                  {abaServicesHistory.map((item, index, arr) => {
                    return (
                      <div
                        key={item.id} // Unique key to avoid React warnings
                        className="border-gray-200 mb-4 flex flex-col gap-4 rounded-lg border p-4"
                      >
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
                        <div className="my-4">
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
                        <div className="flex justify-end gap-4">
                          {index !== 0 && (
                            <button
                              type="button"
                              className="text-red-600 border-red-600 hover:bg-red-50 flex items-center rounded-lg border px-3 py-2 text-sm font-medium"
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
              </div>
            </div>
          </div>
          {/* Other sections of the modal... */}
        </div>
        <div
          className={`h-[600px] overflow-y-scroll px-5 leading-relaxed ${
            openTab === 5 ? "block" : "hidden"
          }`}
        >
          <div className="flex flex-col gap-9">
            <div className="rounded-lg border  border-stroke bg-white p-5 shadow-lg dark:border-strokedark dark:bg-boxdark">
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
                    (Psychologists, psychiatrists, OT, SLP, PT, School
                    personnel, etc.)
                  </span>
                </label>
                <textarea
                  placeholder="Enter end date"
                  className="border-md ring-gray-300 w-full rounded-lg border-stroke bg-transparent px-5 py-3 text-black outline-none ring-1 ring-inset transition focus:ring-2 focus:ring-inset focus:ring-indigo-600 "
                />
              </div>
              <div className="my-4 flex flex-col gap-6 xl:flex-row">
                <div className="w-full">
                  <label className="my-3 flex flex-col text-sm font-medium text-black">
                    <span>Major Life Changes</span>
                    <span className="text-gray-500">(Indicate NA if none)</span>
                  </label>
                  <textarea
                    placeholder="Enter Outcomes"
                    className="border-md ring-gray-300 w-full rounded-lg border-stroke bg-transparent px-5 py-3 text-black outline-none ring-1 ring-inset transition focus:ring-2 focus:ring-inset focus:ring-indigo-600 "
                  />
                </div>
              </div>
              <button className="flex w-full justify-center rounded bg-blue-900 p-3 font-medium text-white hover:bg-opacity-90">
                Add
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ClientTabs;
