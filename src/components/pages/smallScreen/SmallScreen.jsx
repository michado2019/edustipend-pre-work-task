import React, { useState } from "react";
import "./SmallScreen.css";
import { projectData } from "../../projectData/projectData";
import { Add } from "@mui/icons-material";
const SmallScreen = ({ toggle, setToggle }) => {
  const [page, setPage] = useState(1);
  const perPage = 5;
  const pages = Math.ceil(projectData.length / perPage);
  const skip = perPage * page - perPage;
  return (
    <div
      className="smallScreenWrapper"
      style={{
        marginLeft: toggle ? "-10px" : "-1000px",
        transition: "all 0.5s",
      }}
    >
      <div className="smallScreenContents">
        <h2 className="smallScreenTitle">Trending songs</h2>
        {projectData.slice(skip, skip + perPage).map((each) => {
          return (
            <div
              className="smallScreenContent"
              key={each.id}
              onClick={() => setToggle((prev) => !prev)}
            >
              <p className="smallScreenMusic">
                {each.music} by {each.singer}
              </p>
              <Add className="smallScreenAdd-icon" />
            </div>
          );
        })}
        <button
          className="smallScreenBtn"
          onClick={() => setPage((prev) => prev - 1)}
          disabled={page <= 1}
          style={{
            backgroundColor: page <= 1 ? "#ddd" : "",
            display: page <= 1 ? "none" : "block",
          }}
        >
          Previous
        </button>
        <button
          className="smallScreenBtn"
          onClick={() => setPage((prev) => prev + 1)}
          disabled={page >= pages}
          aria-disabled={page >= pages}
          style={{
            backgroundColor: page >= pages ? "#ddd" : "",
            display: page >= pages ? "none" : "block",
          }}
        >
          View more
        </button>
      </div>
    </div>
  );
};
export default SmallScreen;
