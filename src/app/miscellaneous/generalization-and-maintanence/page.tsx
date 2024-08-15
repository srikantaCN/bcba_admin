import React, { useEffect, useState } from "react";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import GeneralizationAndMaintenance from "@/components/Miscellaneous/GeneralizationAndMaintenance";

const School: React.FC = () => {
  return (
    <DefaultLayout>
      <GeneralizationAndMaintenance/>
    </DefaultLayout>
  );
};

export default School;
