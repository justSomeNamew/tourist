import React, { useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import { Routing } from "pages";
import { AppNavigation } from "features/navigation";
import { TOURS } from "shared/mock/tours";
import { TOURS_BY_REGION } from "shared/mock/tours-by-region";

import "./fonts.module.scss";
import "./index.module.scss";

export const App: React.FC = () => {
  useEffect(() => {
    if (!localStorage.getItem("tours")) {
      console.log("re");
      localStorage.setItem("tours", JSON.stringify(TOURS));
    }
    if (!localStorage.getItem("tours-by-region"))
      localStorage.setItem("tours-by-region", JSON.stringify(TOURS_BY_REGION));
  }, [localStorage.getItem("tours")]);
  return (
    <BrowserRouter>
      <Routing />
      <AppNavigation />
    </BrowserRouter>
  );
};
