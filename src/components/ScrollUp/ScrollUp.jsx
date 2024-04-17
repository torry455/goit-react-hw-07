import React from "react";
import ScrollToTop from "react-scroll-up";
import { FaArrowUp } from "react-icons/fa";

export default class Index extends React.Component {
  render() {
    const iconStyles = {
      color: "rgb(9, 129, 33)",
      fontSize: "24px",
      backgroundColor: "#000000",
      borderRadius: "50%",
      width: "30px",
      height: "30px",
      padding: "10px",
    };

    return (
      <div>
        <ScrollToTop showUnder={160}>
          <FaArrowUp style={iconStyles} />
        </ScrollToTop>
      </div>
    );
  }
}
