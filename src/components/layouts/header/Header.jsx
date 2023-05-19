import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import { MenuOutlined, CancelOutlined } from "@mui/icons-material";
const Header = ({ toggle, setToggle }) => {
  return (
    <div className="headerWrapper">
      <div className="headerContents">
        <ul>
          <li className="header-link_list">
            <Link to="#" className="header-link" id="header-link_contact">
              Contact us
            </Link>
          </li>
          <li className="header-link_list">
            <Link to="#" className="header-link" id="header-link_sign">
              Sign up
            </Link>
          </li>
          <li className="header-link_list">
            {toggle ? <CancelOutlined onClick={()=>setToggle(prev=>!prev)} className="menu"/> : <MenuOutlined onClick={()=>setToggle(prev=>!prev)} className="menu"/>}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
