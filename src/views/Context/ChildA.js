import React from "react";
import ChildB from "./ChildB.js";
import TestContext from "./TextContext.js"

class ChildA extends React.Component {
    
    static contextType = TestContext;
  render() {

    return (
      <div>
        Hi I am Child A {this.context}<br></br>
        <ChildB></ChildB>
      </div>
    );
  }
}

export default ChildA;
