import React, { useEffect, useState } from "react";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import Goals from "@/components/Skills/Goals/Goals";


const School: React.FC = () => {
  return (
    <DefaultLayout>
      <Goals/>
    </DefaultLayout>
  );
};

export default School;
