"use client";
import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { usePathname } from "next/navigation";

import { formData } from "@/types/ClientPersonalInfo";
import PersonalViewModal from "./Personal/PersonalFormModal";
import MedicalView from "./Medical/MedicalView";
import MedicallViewModal from "./Medical/MedicalFormModal";
import SchoolView from "./School/SchoolView";
import SchoolFormModal from "./School/SchoolFormModal";
import { Metadata } from "next";
import Breadcrumb from "../Breadcrumbs/Breadcrumb";
import DocumentView from "./Documents/DocumentView";
import DocumentFormModal from "./Documents/DocumentFormModal";
import PersonalView from "./Personal/PersonalView";

export const metadata: Metadata = {
  title: "Client Info | Neuromnia",
  description: "This is the page which displays the details of a client.",
};

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
  // {
  //   name: "Others",
  //   value: 5,
  // },
];

const ClientTabs: React.FC = () => {
  const paths = usePathname();

  const [openTab, setOpenTab] = useState<number | undefined>(1);

  const [isEditPersonal, setIsEditPersonal] = useState<boolean>(false);
  const [isEditMedicalModalOpen, setIsEditMedicalModalOpen] =
    useState<boolean>(false);
  const [isEditSchoolModalOpen, setIsEditSchoolModalOpen] =
    useState<boolean>(false);
  const [isEditDocumentModalOpen, setIsEditDocumentModalOpen] =
    useState<boolean>(false);

  const activeClasses = "text-primary border-blue-900";
  const inactiveClasses = "border-transparent";

  const formData: formData = {
    participantName: "John Doe",
    dateOfBirth: "1990-01-01",
    dateOfInitialAssessment: "2023-06-01",
    dateOfCurrentReassessment: "2024-06-01",
    currentFamilyStructure: "Two-parent Household",
    otherHouseholdDetails: "Additional details about the household",
    parentName: "Jane Doe",
    parentPhone: "1234567890",
    parentEmail: "jane@example.com",
  };
  const medicalData = {
    medications: "Paracetamol, 500mg, Dr. John Doe",
    medicalHistory: "Asthma, High Blood Pressure",
    abaServicesHistory: [
      {
        id: uuidv4(),
        providerName: "TheraCare",
        startDate: "2022-01-10",
        endDate: "2023-05-20",
        outcomes:
          "Significant improvement in communication and behavioral skills.",
      },
      {
        id: uuidv4(),
        providerName: "ABA Clinic",
        startDate: "2021-06-15",
        endDate: "2022-12-30",
        outcomes: "Moderate progress in reducing repetitive behaviors.",
      },
      {
        id: uuidv4(),
        providerName: "Behavioral Health Services",
        startDate: "2020-09-01",
        endDate: "2021-05-15",
        outcomes: "Noticeable improvement in social interactions with peers.",
      },
    ],
    mentalHealthServices: "Mental Health Hospitalization - 2021",
    otherServices: "Occupational therapy - 2 sessions/week",
    coordinationOfCare: "Coordination with psychologist and speech therapist.",
  };
  const schoolData = {
    schoolType: ["Public School", "Special Education School"],
    grade: ["4th Grade", "5th Grade"],
    startEndTime: "8:00 AM - 3:00 PM",
    schedule: "Monday to Friday, 8:00 AM - 3:00 PM",
    totalHours: "35 hours",
    hasIEP: true,
    iepNotes:
      "The student has shown significant improvement in social skills. Recommended to continue the current IEP plan.",
  };
  const files = [
    {
      imageUrl:
        "https://media.istockphoto.com/id/1359932120/vector/contract-document-icon-in-flat-style-report-with-folder-vector-illustration-on-isolated.jpg?s=612x612&w=0&k=20&c=eJUJzNLAWNHutYtNiX1x0ORNXMpOriOMH0S4aX0vUm0=",
      fileUploadDate: "15/08/2024",
      fileUploadType: "Interview Notes",
    },
    {
      imageUrl:
        "https://media.istockphoto.com/id/1359932120/vector/contract-document-icon-in-flat-style-report-with-folder-vector-illustration-on-isolated.jpg?s=612x612&w=0&k=20&c=eJUJzNLAWNHutYtNiX1x0ORNXMpOriOMH0S4aX0vUm0=",
      fileUploadDate: "15/08/2024",
      fileUploadType: "Interview Notes",
    },
    {
      imageUrl:
        "https://media.istockphoto.com/id/1359932120/vector/contract-document-icon-in-flat-style-report-with-folder-vector-illustration-on-isolated.jpg?s=612x612&w=0&k=20&c=eJUJzNLAWNHutYtNiX1x0ORNXMpOriOMH0S4aX0vUm0=",
      fileUploadDate: "15/08/2024",
      fileUploadType: "Interview Notes",
    },
    {
      imageUrl:
        "https://media.istockphoto.com/id/1359932120/vector/contract-document-icon-in-flat-style-report-with-folder-vector-illustration-on-isolated.jpg?s=612x612&w=0&k=20&c=eJUJzNLAWNHutYtNiX1x0ORNXMpOriOMH0S4aX0vUm0=",
      fileUploadDate: "15/08/2024",
      fileUploadType: "Interview Notes",
    },
    {
      imageUrl:
        "https://media.istockphoto.com/id/1359932120/vector/contract-document-icon-in-flat-style-report-with-folder-vector-illustration-on-isolated.jpg?s=612x612&w=0&k=20&c=eJUJzNLAWNHutYtNiX1x0ORNXMpOriOMH0S4aX0vUm0=",
      fileUploadDate: "15/08/2024",
      fileUploadType: "Interview Notes",
    },
  ];

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
      <Breadcrumb pageName="Client Info" />
      {/* <div className="mb-6 flex flex-wrap gap-5 border-b border-stroke dark:border-strokedark sm:gap-10">
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
      </div> */}
      <div className="flex flex-col gap-9">
        <PersonalView
          formData={formData}
          setIsEditPersonal={setIsEditPersonal}
        />
        <MedicalView
          {...medicalData}
          setIsEditMedicalModalOpen={setIsEditMedicalModalOpen}
        />

        <SchoolView
          schoolPlacement={schoolData}
          setIsEditSchoolModalOpen={setIsEditSchoolModalOpen}
        />
        <DocumentView
          files={files}
          setIsDocumentModalOpen={setIsEditDocumentModalOpen}
        />
      </div>
      <PersonalViewModal
        modalOpen={isEditPersonal}
        toggle={setIsEditPersonal}
      />
      <MedicallViewModal
        modalOpen={isEditMedicalModalOpen}
        toggle={setIsEditMedicalModalOpen}
      />
      <SchoolFormModal
        modalOpen={isEditSchoolModalOpen}
        toggle={setIsEditSchoolModalOpen}
      />

      <DocumentFormModal
        modalOpen={isEditDocumentModalOpen}
        toggle={setIsEditDocumentModalOpen}
      />
      <div>
        <div
          className={`px-5 leading-relaxed ${
            openTab === 1 ? "block" : "hidden"
          }`}
        ></div>
        <div
          className={`px-5 leading-relaxed ${
            openTab === 3 ? "block" : "hidden"
          }`}
        ></div>
        <div
          className={`px-5 leading-relaxed ${
            openTab === 2 ? "block" : "hidden"
          }`}
        ></div>
        <div>
          <div
            className={`px-5 leading-relaxed ${
              openTab === 4 ? "block" : "hidden"
            }`}
          >
            {/* Other sections of the modal... */}
          </div>
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
