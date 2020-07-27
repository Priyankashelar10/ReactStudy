import React from "react";
import ChildRef from "./RefChild.js";

class RefParent extends React.Component {
  constructor(props) {
    super(props);
    this.refTOChildComp = React.createRef();
  }

  setFocus = ()=>{
      this.refTOChildComp.current.setfocusOnInpute();
  }

  render() {
    return (
      <div>
        I am Ref Parent component  
        <br></br>
        <button onClick={this.setFocus}>set child Inpute focus</button>
        <ChildRef ref={this.refTOChildComp}></ChildRef>
      </div>
    );
  }
}

export default RefParent;
