// IMPORT THE REQUIRED MODULES
import React from "react";

// IMPORT THE REQUIRED COMPONENT
import MenuItem from "./MenuItem";

// FUNCTION COMPONENT OF MENU
const Menu = (props) => {
  return (
    <div className="screen-menu">
      <div className="app-name">
        {props.menuoptions.length === 3?<h3>Music</h3>: <h3>ReactIpod</h3>}
      </div>
      {/* MENU ITEM COMPONENT WITH PROPS */}
      <MenuItem menuoptions={props.menuoptions} optionidx={props.optionidx} />
    </div>
  );
};

export default Menu;
