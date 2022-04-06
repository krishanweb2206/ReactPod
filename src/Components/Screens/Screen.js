import React from "react";

// IMPORT THE REQUIRED COMPONENTS
import Menu from './Menu/Menu';
import Games from '../Game/Game';
import CoverFlow from '../CoverFlow/CoverFlow';
import Setting from "../Setting/Setting";

// SCREEN FUNCTION COMPONENTS
const Screen =(props)=>{

    return (
      <div className="screen-container">
        {/* MENU COMPOMENT WITH PROPS */}
        <Menu menuoptions={props.menuoptions} optionidx={props.optionidx} />

        {props.showScreen === 0 && props.menuoptions.length === 4 ? <Games /> : ""}
        {props.showScreen === 2 && props.menuoptions.length === 4 ? <Setting /> : ""}
        {props.showScreen === 3 && props.menuoptions.length === 4 ? <CoverFlow /> : ""}
      </div>
    );
}

export default Screen;