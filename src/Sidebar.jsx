import React from "react";
import NotesIcon from "./Icons/Notes-icon.svg";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="sidebar-overall">
      <div className="sidebar-position">
        <div className="sidebar-brand-text ">
          <div>Notes App</div>
        </div>
        <ul className="sidebar" id="accordionSidebar">
          <li>
            <div className="Notes-style">
              <div>
                <img src={NotesIcon} alt="icon" />
              </div>
              <div>
                <Link to="/Dashboard">
                  <span>Notes</span>
                </Link>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
