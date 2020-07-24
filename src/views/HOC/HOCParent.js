import React from "react";

const HOCParent = (OriginalComponent , incrementBY) => {
  class HOCofClick extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        count: 0,
      };
    }

    IncreamentCount = () => {
      const countValue = this.state.count;
      this.setState({ count: countValue + incrementBY });
    };

    render() {
      return <OriginalComponent IncreamentCount = {this.IncreamentCount} count = {this.state.count}></OriginalComponent>;
    }
  }

  return HOCofClick;
};

export default HOCParent;
