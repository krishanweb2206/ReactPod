// IMPORT THE REQUIRED MODULES
import React from "react";
import { FaAngleDoubleLeft } from "react-icons/fa";

// MENUITEM CLASS COMPONENTS
class MenuItem extends React.Component {
  render() {
    //   DESTRUCTING THE MENUOPTIONS
    const { menuoptions } = this.props;

    return (
        // RETURN THE COMPONENT
      <React.Fragment>
        {menuoptions.map((item, index) => {
          return (
            <div
              className={this.props.optionidx === index ? "selected" : ""}
              key={index}
            >
              <p>{item}</p>
            </div>
          );
        })}

        {menuoptions.length === 3 ? (
          <div style={{ color: "green" }}>
            <p style={{ fontSize: 15 }}>
              click "<FaAngleDoubleLeft />" to go back
            </p>
          </div>
        ) : (
          ""
        )}
      </React.Fragment>
    );
  }
}

export default MenuItem;
