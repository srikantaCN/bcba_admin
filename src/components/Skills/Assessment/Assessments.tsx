"use client";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import SearchAndFilter from "../../SearchAndFilter/SearchAndFilter";
import AddIcon from "@mui/icons-material/Add";
import FilterListIcon from "@mui/icons-material/FilterList";
import React, { useState } from "react";
import Button from "@mui/material/Button";
import AddAssessment from "./AddAssessmentForm";



const Assessments = ({  }) => {

  const [isAssessmentModalOpen, setIsAssessmentModalOpen] = useState<boolean>(false)

  return (
    <>
      <Breadcrumb pageName="Assessments" />
      <SearchAndFilter title="Search Assessment" searchFunc={()=> {}}/>

      {/* <div className="grid grid-cols-1 gap-9 sm:grid-cols-2"> */}
      <div className="flex flex-col gap-9">
        {/* <!-- Input Fields --> */}
        <div className="flex flex-col gap-9">
          <div className="rounded-lg border border-stroke bg-white px-5 py-6 shadow-lg dark:border-strokedark dark:bg-boxdark">
            <div className="mb-5 flex items-center justify-between">
              <Button
                onClick={() => setIsAssessmentModalOpen(true)}
                size="small"
                variant="outlined"
                startIcon={<FilterListIcon />}
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
                Filter
              </Button>
              <Button
                onClick={() => setIsAssessmentModalOpen(true)}
                size="small"
                variant="outlined"
                startIcon={<AddIcon />}
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
                Add Assessment
              </Button>
            </div>

            <div className="relative overflow-x-auto shadow-lg sm:rounded-lg">
              <table className="text-gray-500 dark:text-gray-400 w-full text-left text-sm rtl:text-right">
                <thead className="text-gray-700 bg-slate-300 dark:bg-gray-700 dark:text-gray-400 text-xs uppercase">
                  <tr>
                    <th scope="col" className="px-6 py-3">
                      Assessment Upload
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Assessment Name
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Assessment Date
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Assessor Name
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Assessment Type
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="dark:bg-gray-800 dark:border-gray-700 border-b bg-white">
                    <th
                      scope="row"
                      className="text-gray-900 whitespace-nowrap px-6 py-4 font-medium dark:text-white"
                    >
                      pdf
                    </th>
                    <td className="px-6 py-4">abc</td>
                    <td className="px-6 py-4">dd/mm/yyyy</td>
                    <td className="px-6 py-4">bcba</td>
                    <td className="px-6 py-4">normal</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      <AddAssessment modalOpen={isAssessmentModalOpen} toggle={setIsAssessmentModalOpen}/>
    </>
  );
};

export default Assessments;
