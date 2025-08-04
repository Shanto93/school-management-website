import { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router";

const AcademicEvents = () => {
  const location = useLocation();
  const [pageTitle, setPageTitle] = useState("Academic Events");

  useEffect(() => {
    const pathMap = {
      "/academic-events/events": "Academic Events / Events",
      "/academic-events/event-list": "Academic Events / Event List",
    };

    setPageTitle(pathMap[location.pathname] || "Academic Events");
  }, [location.pathname]);

   const titleParts = pageTitle.split(" / ");
  const mainTitle = titleParts.slice(0, -1).join(" / ");
  const currentPage = titleParts[titleParts.length - 1];
  return (
    <div className="p-4">
      <h2 className="text-xl mb-4">
        <span className="text-gray-700">{mainTitle}</span>
        {titleParts.length > 1 && (
          <>
            <span className="mx-1 text-gray-400">/</span>
            <span className="font-semibold">{currentPage}</span>
          </>
        )}
      </h2>

      <Outlet />
    </div>
  );
};

export default AcademicEvents;
