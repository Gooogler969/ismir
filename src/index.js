import { React, lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { SpinnerCircularFixed } from "spinners-react";

const App = lazy(() => import("./App"));
const ServicePage = lazy(() => import("./pages/ServicePage"));
const PortfolioPage = lazy(() => import("./pages/PortfolioPage"));
const AboutPage = lazy(() => import("./pages/AboutPage"));

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense
        fallback={
          <div className="spinner">
            <SpinnerCircularFixed
              size={70}
              thickness={100}
              speed={100}
              color="rgba(0, 0, 0, 1)"
              secondaryColor="rgba(255, 255, 255, 0.5)"
            />
          </div>
        }
      >
        <App />
      </Suspense>
    ),
  },
  {
    path: "service",
    element: (
      <Suspense
        fallback={
          <div className="spinner">
            <SpinnerCircularFixed
              size={70}
              thickness={100}
              speed={100}
              color="rgba(0, 0, 0, 1)"
              secondaryColor="rgba(255, 255, 255, 0.5)"
            />
          </div>
        }
      >
        <ServicePage />
      </Suspense>
    ),
  },
  {
    path: "portfolio",
    element: (
      <Suspense
        fallback={
          <div className="spinner">
            <SpinnerCircularFixed
              size={70}
              thickness={100}
              speed={100}
              color="rgba(0, 0, 0, 1)"
              secondaryColor="rgba(255, 255, 255, 0.5)"
            />
          </div>
        }
      >
        <PortfolioPage />
      </Suspense>
    ),
  },
  {
    path: "about",
    element: (
      <Suspense
        fallback={
          <div className="spinner">
            <SpinnerCircularFixed
              size={70}
              thickness={100}
              speed={100}
              color="rgba(0, 0, 0, 1)"
              secondaryColor="rgba(255, 255, 255, 0.5)"
            />
          </div>
        }
      >
        <AboutPage />
      </Suspense>
    ),
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);

reportWebVitals();
