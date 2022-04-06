// IMPORT THE REQUIRED MODULES
import React from 'react';
import {
  FaAlignJustify,
  FaAngleDoubleLeft,
  FaAngleDoubleRight,
  FaCaretRight,
  FaEquals,
} from "react-icons/fa";

// BUTTONS FUNCTIONAL COMPONENT
const Buttons= (props)=>{

    return (
      <div className="button-container">
        <button className="center-button" onClick={props.selectButtonClick}>
          <h2>Select</h2>
        </button>

        <button className="menu-button" onClick={props.menuButtonClick}>
          <FaAlignJustify className="icon-size" />
        </button>

        <button className="left-button" onClick={props.leftButtonClick}>
          <FaAngleDoubleLeft className="icon-size" />
        </button>

        <button className="right-button" onClick={props.rightButtonClick}>
          <FaAngleDoubleRight className="icon-size" />
        </button>

        <button className="play-pause-button" onClick={props.playPauseButton}>
          <FaCaretRight className="icon-size" />
          <FaEquals className="icon-size" />
        </button>
      </div>
    );


}

export default Buttons;