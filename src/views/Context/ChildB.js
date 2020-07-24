import React from "react";
import ChildC from "./ChildC.js";

class ChildB extends React.Component {
  render() {
    return (
      <div>
        Hi I am Child B<br></br>
        <ChildC></ChildC>
      </div>
    );
  }
}

export default ChildB;
