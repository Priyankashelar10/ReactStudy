import React from "react";

class ButtonCLick extends React.Component {
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
        <ButtonCLick></ButtonCLick>
        <DivClick></DivClick>
      </div>
    );
  }
}

export default HOCExample;
