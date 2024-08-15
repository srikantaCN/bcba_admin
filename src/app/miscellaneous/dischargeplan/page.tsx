import React, { useEffect, useState } from "react";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import DischargePlan from "@/components/Miscellaneous/DischargePlan";

const School: React.FC = () => {
  return (
    <DefaultLayout>
      <DischargePlan/>
    </DefaultLayout>
  );
};

export default School;
