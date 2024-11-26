import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import JobBoard from "../components/JobBoard";
import Applications from "../components/Applications";
import SuggestedApplicants from "../components/SuggestedApplicants";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <JobBoard />,
      },
      {
        path: "/jobs",
        element: <JobBoard />,
      },
      {
        path: "/applications",
        element: <Applications />,
      },
      {
        path: "/suggested-applicants",
        element: <SuggestedApplicants />,
      },
    ],
  },
]);
