import React, { PureComponent } from "react";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";

import styles from "assets/jss/material-dashboard-react/views/dashboardStyle.js";

class AddNumbers extends PureComponent {
  render() {
    console.log("Loading number Component : " + this.props.number);
    return <h2>{this.props.number}</h2>;
  }
}

class ParkingGrid extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: [1],
      currentCount: 1,
    };
  }

  btnRemoveNUmber = () => {
    console.log("Before Remove number currentCount: " + this.state.currentCount);

    this.setState(
      (state) => {
        const count = state.count.filter(
          (item, j) => this.state.currentCount !== item
        );
        return {
          count,
        };
      },

      this.setState({ currentCount: this.state.currentCount - 1 }, function () {
        console.log("after Remove number count: " + this.state.count);
      })
    );
  };

  btnAddNUmber = () => {
    console.log("Before update currentCount : " + this.state.currentCount);
    this.setState({ currentCount: this.state.currentCount + 1 }, function () {
      this.setState(
        (state) => {
          const count = [...state.count, state.currentCount];
          return {
            count,
          };
        },

        function () {
          console.log("After update count: " + this.state.count);
        }
      );
    });
  };
  render() {
    const { classes } = this.props;
    console.log("******Rendering Parent component");

    return (
      <div>
        <button onClick={this.btnAddNUmber}> Add Number</button>{" "}
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
        <button onClick={this.btnRemoveNUmber}> Remove Number</button>
        {this.state.count.map((num) => (
          <AddNumbers number={num}></AddNumbers>
        ))}
      </div>
    );
  }
}

ParkingGrid.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ParkingGrid);
