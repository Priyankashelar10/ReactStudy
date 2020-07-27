import React from "react";

class RefChild extends React.Component {
  constructor(props) {
    super(props);
    this.inputeRef = React.createRef();
  }


  setfocusOnInpute() {
    this.inputeRef.current.focus();
  }

  render() {
    return (
      <div>
        I am Ref Child component
        <br></br>
        <input type="text" ref={this.inputeRef}></input>
      </div>
    );
  }
}

export default RefChild;
