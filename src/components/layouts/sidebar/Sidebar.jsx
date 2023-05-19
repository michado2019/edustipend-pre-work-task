import React, { useState } from "react";
import "./Sidebar.css";
import { projectData } from "../../projectData/projectData";
import { Add } from "@mui/icons-material";
const Sidebar = () => {
  const [page, setPage] = useState(1);
  const perPage = 5;
  const pages = Math.ceil(projectData.length / perPage);
  const skip = perPage * page - perPage;
  return (
    <div className="sidebarWrapper">
      <div className="sidebarContents">
        <h2 className="sidebarTitle">Trending songs</h2>
        {projectData.slice(skip, skip + perPage).map((each) => {
          return (
            <div className="sidebarContent" key={each.id}>
              <p className="sidebarMusic">
                {each.music} by {each.singer}
              </p>
              <Add className="sidebarAdd-icon" />
            </div>
          );
        })}
        <button
          className="sidebarBtn"
          onClick={() => setPage((prev) => prev - 1)}
          disabled={page <= 1}
          style={{backgroundColor: page<=1? "#ddd":"",display: page<=1? "none":"block"}}
        >
          Previous
        </button>
        <button
          className="sidebarBtn"
          onClick={() => setPage((prev) => prev + 1)}
          disabled={page >= pages}
          aria-disabled={page >= pages}
          style={{backgroundColor: page>=pages? "#ddd":"", display: page>=pages? "none":"block"}}
        >
          View more
        </button>
      </div>
    </div>
  );
};
export default Sidebar;
