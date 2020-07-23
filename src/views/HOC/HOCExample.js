import React from "react";
import HOCChild from './HOCChild.js';

const hocOfClick = (originalComponent) => {
  class HOCofClick extends React.Component {
    render() {
      return <originalComponent></originalComponent>;
    }
  }

  return HOCofClick;
};



class DivClick extends React.Component {
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
    return <div onMouseOver={this.IncreamentCount}>{this.state.count}</div>;
  }
}

class HOCExample extends React.Component {
  render() {
    return (
      <div>
        <HOCChild></HOCChild>
        <DivClick></DivClick>
      </div>
    );
  }
}

export default HOCExample;
