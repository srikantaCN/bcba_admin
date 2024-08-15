import React, { useEffect, useState } from "react";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import Analytics from "@/components/Analytics/Analytics";

const School: React.FC = () => {
  return (
    <DefaultLayout>
      <Analytics/>
    </DefaultLayout>
  );
};

export default School;
