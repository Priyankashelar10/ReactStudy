import React from "react";
import HOCParent from './HOCParent.js';

class HOCChild extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  IncreamentCount = () => {
    const countValue = this.state.count;
    this.setState({ count: countValue + 1 });
  };

  render() {
    return <button onClick={this.IncreamentCount}>{this.state.count}</button>;
  }
}


export default HOCParent(HOCChild);