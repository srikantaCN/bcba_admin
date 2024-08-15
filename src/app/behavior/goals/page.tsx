import React, { useEffect, useState } from "react";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import BehaviorTabs from "@/components/Behavior/BehaviorTabs";

const School: React.FC = () => {
  return (
    <DefaultLayout>
      <BehaviorTabs/>
    </DefaultLayout>
  );
};

export default School;
