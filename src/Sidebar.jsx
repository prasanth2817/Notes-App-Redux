import React from "react";
import { Link } from "react-router-dom";
import NotesIcon from "./Icons/Notes-icon.svg";

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
                  <span>Notes</span>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;