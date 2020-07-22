import React from "react";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import { AddParkingDetailsAPI, GetAllAPrkingDataAPI } from "../../utility.js";

// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import TextField from "@material-ui/core/TextField";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";

// @material-ui/icons

import styles from "assets/jss/material-dashboard-react/views/dashboardStyle.js";

class AddParkingDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      flatNo: "",
      firstName: "",
      lastName: "",
      parkingNo: "",
      validFlatNo: "",
      validFirstName: "",
      validLastName: "",
      validParkingNo: "",
    };
  }
  validateForm = () => {
    let isFormValidate = true;
    if (this.state.flatNo.length === 0) {
      isFormValidate = false;
      this.setState({ validFlatNo: "Required flat No." });
    } else {
      this.setState({ validFlatNo: "" });
    }
    if (this.state.firstName.length === 0) {
      isFormValidate = false;
      this.setState({ validFirstName: "Required First nme" });
    } else {
      this.setState({ validFirstName: "" });
    }

    if (this.state.lastName.length === 0) {
      isFormValidate = false;
      this.setState({ validLastName: "Required last Name" });
    } else {
      this.setState({ validLastName: "" });
    }

    if (this.state.parkingNo.length === 0) {
      isFormValidate = false;
      this.setState({ validParkingNo: "Required parking No." });
    } else {
      this.setState({ validParkingNo: "" });
    }
    return isFormValidate;
  };

  btnAddParking = (event) => {
    if (this.validateForm()) {
      console.log("Valid form");
      debugger;

      const result = AddParkingDetailsAPI({
        flatNo: this.state.flatNo,
        parkingNo: this.state.parkingNo,
      },GetAllAPrkingDataAPI);

     // GetAllAPrkingDataAPI();
    } else {
      console.log("not valid  form");
    }
  };

  handletextboxChange = (e) => {
    const value = e.target.value;
    this.setState({ [e.target.id]: value }); //working correctly
  };

  componentDidMount() {
    // this.btnAddParking();
  }

  render() {
    const { classes } = this.props;

    return (
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={8}>
            <Card>
              <CardHeader color="primary">
                <h4 className={classes.cardTitleWhite}>Parking Details</h4>
                <p className={classes.cardCategorywhite}>
                  Complete your profile
                </p>
              </CardHeader>
              <CardBody>
                <GridContainer>
                  <GridItem xs={12} sm={12} md={5}>
                    <TextField
                      id="flatNo"
                      label="Flat no"
                      value={this.state.flatNo}
                      onChange={this.handletextboxChange}
                    />
                    <p className={classes.cardCategoryRed}>
                      {this.state.validFlatNo}
                    </p>
                  </GridItem>
                </GridContainer>
                <br></br>
                <GridContainer>
                  <GridItem xs={12} sm={12} md={3}>
                    <TextField
                      id="firstName"
                      label="Owner name"
                      value={this.state.firstName}
                      onChange={this.handletextboxChange}
                    />
                    <p className={classes.cardCategoryRed}>
                      {this.state.validFirstName}
                    </p>
                  </GridItem>
                  <GridItem xs={12} sm={12} md={4}>
                    <TextField
                      id="lastName"
                      label="Surname"
                      value={this.state.lastName}
                      onChange={this.handletextboxChange}
                    />
                    <p className={classes.cardCategoryRed}>
                      {this.state.validLastName}
                    </p>
                  </GridItem>
                </GridContainer>
                <br></br>
                <GridContainer>
                  <GridItem xs={12} sm={12} md={6}>
                    <TextField
                      id="parkingNo"
                      label="Parking no."
                      value={this.state.parkingNo}
                      onChange={this.handletextboxChange}
                    />
                    <p className={classes.cardCategoryRed}>
                      {this.state.validParkingNo}
                    </p>
                  </GridItem>
                </GridContainer>
              </CardBody>
              <CardFooter>
                <Button color="primary" onClick={this.btnAddParking}>
                  Add parking
                </Button>
              </CardFooter>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    );
  }
}

AddParkingDetails.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AddParkingDetails);
