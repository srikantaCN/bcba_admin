import React, { useEffect, useState } from "react";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import Team from "@/components/Communication/Team";

const School: React.FC = () => {
  return (
    <DefaultLayout>
      <Team/>
    </DefaultLayout>
  );
};

export default School;
