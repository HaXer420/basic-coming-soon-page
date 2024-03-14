import React from "react";
import { useRoutes } from "react-router-dom";
import NotFound from "pages/NotFound";
import ComingSoon from "pages/ComingSoon";

const ProjectRoutes = () => {
  let element = useRoutes([
    { path: "*", element: <NotFound /> },
    {
      path: "/",
      element: <ComingSoon />,
    },
  ]);

  return element;
};

export default ProjectRoutes;
