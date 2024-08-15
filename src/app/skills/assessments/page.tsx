import React, { useEffect, useState } from "react";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import Assessments from "@/components/Skills/Assessment/Assessments";

const School: React.FC = () => {
  return (
    <DefaultLayout>
      <Assessments/>
    </DefaultLayout>
  );
};

export default School;
