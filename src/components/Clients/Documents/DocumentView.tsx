import { Dispatch, FC, SetStateAction } from "react";
import DomainVerificationIcon from "@mui/icons-material/DomainVerification";
import EventIcon from "@mui/icons-material/Event";
import { Edit as EditIcon } from "@mui/icons-material";

interface FileProps {
  imageUrl: string;
  fileUploadDate: string;
  fileUploadType: string;
}
interface ViewFormProps {
  files: FileProps[];

  setIsDocumentModalOpen: Dispatch<SetStateAction<boolean>>;
}

const DocumentView: FC<ViewFormProps> = ({ files, setIsDocumentModalOpen }) => {
  return (
    <div className="rounded-lg border border-stroke bg-white p-6 shadow-lg dark:border-strokedark dark:bg-boxdark">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="mb-6 text-2xl font-semibold text-black">Documents</h2>
        <button
          onClick={() => setIsDocumentModalOpen(true)}
          className="border-gray-400 text-gray-500 flex items-center rounded-full border px-3 py-1 transition hover:bg-indigo-100 hover:text-indigo-600"
        >
          <EditIcon className="mr-2" /> Edit
        </button>
      </div>

      <div className="mt-8">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {files.map((file, index) => (
            <div
              key={index}
              className="border-gray-200 transform rounded-lg border bg-white p-4 shadow-sm transition duration-300 hover:scale-105 hover:shadow-lg"
            >
              <div className="flex items-center space-x-4">
                <img
                  alt="file image"
                  src={file.imageUrl}
                  className="h-16 w-16 rounded-lg object-cover"
                />
                <div>
                  <div className="flex items-center space-x-2">
                    <EventIcon className="text-blue-600" />
                    <span className="text-gray-800 font-semibold">
                      File Upload Date:
                    </span>
                    <span className="text-gray-600">{file.fileUploadDate}</span>
                  </div>
                  <div className="mt-2 flex items-center space-x-2">
                    <DomainVerificationIcon className="text-blue-600" />
                    <span className="text-gray-800 font-semibold">
                      File Type:
                    </span>
                    <span className="text-gray-600">{file.fileUploadType}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DocumentView;
