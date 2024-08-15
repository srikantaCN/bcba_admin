import React, { useEffect, useState } from "react";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import CrisisPlan from "@/components/Miscellaneous/CrisisPlan";

const School: React.FC = () => {
  return (
    <DefaultLayout>
      <CrisisPlan/>
    </DefaultLayout>
  );
};

export default School;
