import React from "react";
import HOCParent from './HOCParent.js';

class HOCChild extends React.Component {
  
  render() {
    return <button onClick={this.props.IncreamentCount}>{this.props.count}</button>;
  }
}


export default HOCParent(HOCChild, 5);