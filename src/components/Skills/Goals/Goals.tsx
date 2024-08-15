"use client"
import { FC, useState } from "react";
import { Button } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import PersonIcon from "@mui/icons-material/Person";
import AddGoals from "./AddGoals";



const GoalsView: FC = () => {

  const [isGoalsModalOpen, setIsGoalsModalOpen] = useState<boolean>(false)  


  return (
    <div className="flex flex-col gap-9">
      <div className="rounded-lg border border-stroke bg-white px-5 py-6 shadow-lg dark:border-strokedark dark:bg-boxdark">
        <div className="mb-5 flex items-center justify-between">
          <h2 className="text-2xl font-semibold text-indigo-600">Goals</h2>
          <Button
            onClick={() => setIsGoalsModalOpen(true)}
            size="small"
            variant="outlined"
            startIcon={<EditIcon />}
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
            Edit
          </Button>
        </div>

        <div className="space-y-8">
          {/* Goal Information */}
          <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
            <InfoItem title="Client ID" icon={<PersonIcon />} value="John Doe" />
            <InfoItem title="Goal Type" value="Fitness" />
          </div>

          <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
            <InfoItem title="Goal Description" value="Lose 10 pounds in 3 months" />
            <InfoItem title="Medical Rationale" value="Improve overall health" />
          </div>

          <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
            <InfoItem title="Baseline Level" value="200 lbs" />
            <InfoItem title="Current Level" value="190 lbs" />
          </div>

          <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
            <InfoItem title="Short Term Goal" value="Lose 3 pounds in 1 month" />
            <InfoItem title="ST Goal Duration" value="1 month" />
          </div>

          <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
            <InfoItem title="Long Term Goal" value="Reach 180 lbs" />
            <InfoItem title="LT Goal Duration" value="3 months" />
          </div>

          <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
            <InfoItem title="Progress Summary" value="On track" />
            <InfoItem title="Goal Status" value="Active" />
          </div>
        </div>
      </div>
      <AddGoals modalOpen={isGoalsModalOpen} toggle={setIsGoalsModalOpen}/>
    </div>
  );
};

interface InfoItemProps {
  title: string;
  value: string;
  icon?: React.ReactNode;
}

const InfoItem: FC<InfoItemProps> = ({ title, value, icon }) => {
  return (
    <div className="flex items-center gap-3">
      {icon && <div className="text-indigo-600">{icon}</div>}
      <div>
        <h3 className="text-gray-600 text-sm font-medium">{title}</h3>
        <p className="text-gray-900 mt-1 text-base font-semibold">{value}</p>
      </div>
    </div>
  );
};

export default GoalsView;
