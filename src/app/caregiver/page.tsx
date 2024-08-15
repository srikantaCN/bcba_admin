import React, { useEffect, useState } from "react";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import Caregiver from "@/components/Caregiver/Caregiver";

const School: React.FC = () => {
  return (
    <DefaultLayout>
      <Caregiver/>
    </DefaultLayout>
  );
};

export default School;
