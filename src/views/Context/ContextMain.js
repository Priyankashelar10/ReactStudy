import React from "react";
import ChildA from "./ChildA.js";
import { TestProvider } from "./TextContext.js";

class ContextMain extends React.Component {
  render() {
    return (
      <div>
        <TestProvider value={{ "name": "Priya","surname" : "Shelar" }}>
          Hi I am context Main page
          <br></br>
          <ChildA></ChildA>
        </TestProvider>
      </div>
    );
  }
}

export default ContextMain;
