import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Icon from "@material-ui/core/Icon";
import PropTypes from "prop-types";
import axios from "axios";

// @material-ui/icons
import Warning from "@material-ui/icons/Warning";

import styles from "assets/jss/material-dashboard-react/views/dashboardStyle.js";

const useStyles = makeStyles(styles);
class AddParkingDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = { apiResponse: "" };
  }

  render() {
    //const classes = useStyles();
    const { classes } = this.props;
    // const classes = {};
    return <div>HI... I am add parking page</div>;
  }
}

AddParkingDetails.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AddParkingDetails);
