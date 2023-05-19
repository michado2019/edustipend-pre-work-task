import React from "react";
import "./Sidebar.css";
import { projectData } from "../../projectData/projectData";
import { Add } from "@mui/icons-material";
const Sidebar = () => {
  return (
    <div className="sidebarWrapper">
      <div className="sidebarContents">
          {
            projectData.slice(0, 5).map((each) => {
              return(
                <div className="sidebarContent" key={each.id}>
                 <p className="sidebarMusic">{each.music} by {each.singer}</p>
                 <Add className="sidebarAdd-icon" />
                </div>
              )
            })
          }
          <button className="sidebarBtn">View more</button>
      </div>
    </div>
  );
};
export default Sidebar;