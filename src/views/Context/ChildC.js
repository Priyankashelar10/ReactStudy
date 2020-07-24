import React from "react";
import TestContext from "./TextContext.js"


class ChildC extends React.Component {
    static contextType = TestContext;

  render() {
    return <div>Hi I am Child C {this.context.surname }</div>;
  }
}

export default ChildC;
