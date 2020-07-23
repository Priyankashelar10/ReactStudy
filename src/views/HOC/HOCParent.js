import React from "react";

const HOCParent = (OriginalComponent) => {
  class HOCofClick extends React.Component {
    render() {
      return <OriginalComponent></OriginalComponent>;
    }
  }

  return HOCofClick;
};

export default HOCParent;
