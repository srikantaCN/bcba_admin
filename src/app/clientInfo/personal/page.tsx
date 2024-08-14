import React, { useEffect, useState } from "react";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import ClientTabs from "@/components/Clients/ClientTabs";

const Personal: React.FC = () => {
  return (
    <DefaultLayout>
      <ClientTabs />
    </DefaultLayout>
  );
};

export default Personal;
