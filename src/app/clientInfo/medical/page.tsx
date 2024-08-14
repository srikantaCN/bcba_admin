import React, { useEffect, useState } from "react";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import ClientTabs from "@/components/Clients/ClientTabs";

const School: React.FC = () => {
  return (
    <DefaultLayout>
      <ClientTabs />
    </DefaultLayout>
  );
};

export default School;
