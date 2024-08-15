import React, { Dispatch, SetStateAction, useState } from "react";
import { v4 as uuidv4 } from "uuid";

import CloseIcon from "@mui/icons-material/Close";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import { Button, Drawer } from "@mui/material";

interface FileProps {
  id: string;
  imageUrl: string;
  fileUploadDate: string;
  fileUploadType: string;
}
interface DocumentProps {
  modalOpen: boolean;
  toggle: Dispatch<SetStateAction<boolean>>;
}
const DocumentFormModal = ({ modalOpen, toggle }: DocumentProps) => {
  const initialValue: FileProps = {
    id: uuidv4(),
    imageUrl: "",
    fileUploadDate: "",
    fileUploadType: "",
  };
  const [files, setFiles] = useState<FileProps[]>([initialValue]);

  const handleAddFile = () => {
    const newFile = [...files];
    newFile.push(initialValue);
    console.log("object", newFile);
    setFiles(newFile);
  };

  const handleDelete = (index: number) => {
    console.log("called");
    const newFiles = [...files];
    const updatedFiles = newFiles.filter((_, i) => i !== index);
    setFiles(updatedFiles);
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
            Documents
          </h2>
          <Button
            style={{ color: "black", width: "20px" }}
            onClick={() => toggle(false)}
          >
            <CloseIcon />
          </Button>
        </div>
        <div className="flex flex-col gap-9">
          <div className="rounded-lg border border-stroke bg-white p-5 shadow-lg dark:border-strokedark dark:bg-boxdark">
            {files.map((file, index, arr) => {
              return (
                <div className="flex flex-col gap-5.5 p-6.5">
                  <div>
                    <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                      Attach file
                    </label>
                    <input
                      type="file"
                      className="w-full cursor-pointer rounded-lg border-[1.5px] border-stroke bg-transparent outline-none transition file:mr-5 file:border-collapse file:cursor-pointer file:border-0 file:border-r file:border-solid file:border-stroke file:bg-whiter file:px-5 file:py-3 file:hover:bg-primary file:hover:bg-opacity-10 focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:file:border-form-strokedark dark:file:bg-white/30 dark:file:text-white dark:focus:border-primary"
                    />
                  </div>
                  <div className="my-4 flex flex-col gap-6 xl:flex-row">
                    <div className="w-full xl:w-1/2">
                      <label className="my-3 block text-sm font-medium text-black">
                        File Upload Date
                      </label>
                      <input
                        type="date"
                        placeholder="Choose a date"
                        className="border-md ring-gray-300 w-full rounded-lg border-stroke bg-transparent px-5 py-3 text-black outline-none ring-1 ring-inset transition focus:ring-2 focus:ring-inset focus:ring-indigo-600 "
                      />
                    </div>
                    <div className="w-full xl:w-1/2">
                      <label className="my-3 block text-sm font-medium text-black">
                        File Type
                      </label>
                      <select className="border-md ring-gray-300 w-full rounded-lg border-stroke bg-transparent px-5 py-3 text-black outline-none ring-1 ring-inset transition focus:ring-2 focus:ring-inset focus:ring-indigo-600 ">
                        <option>Select</option>
                        <option>Interview Notes</option>
                        <option>Observation Notes</option>
                        <option>Medical Record</option>
                        <option>School Record</option>
                        <option>Other</option>
                      </select>
                    </div>
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
                        onClick={handleAddFile}
                      >
                        <AddIcon className="mr-1" /> Add File
                      </button>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Drawer>
    </div>
  );
};

export default DocumentFormModal;
