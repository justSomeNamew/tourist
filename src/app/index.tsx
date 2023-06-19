import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Routing } from "pages";
import { AppNavigation } from "features/navigation";

import "./fonts.module.scss";
import "./index.module.scss";

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routing />
      <AppNavigation />
    </BrowserRouter>
  );
};
