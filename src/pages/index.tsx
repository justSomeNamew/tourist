import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";

const HomePage = lazy(() => import("./home"));
const NotFoundPage = lazy(() => import("./not-found"));
const ToursPage = lazy(() => import("./tours"));
const MyToursPage = lazy(() => import("./my-tours"));
const TourPage = lazy(() => import("./tour"));
const AboutPage = lazy(() => import("./about"));

export const Routing = () => {
  return (
    <Suspense fallback={<>Загрузка...</>}>
      <Routes>
        <Route path="*" element={<NotFoundPage />} />
        <Route path="/" Component={HomePage} />
        <Route path="/tours-list" Component={ToursPage} />
        <Route path="/tours-list/:tourId" Component={TourPage} />
        <Route path="/my-tours" Component={MyToursPage} />
        <Route path="/about" Component={AboutPage} />
      </Routes>
    </Suspense>
  );
};
