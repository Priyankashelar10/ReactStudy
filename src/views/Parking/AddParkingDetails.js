import React from "react";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";

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
    };
  }

  btnAddParking = (event) => {
    console.log("Clicked add parking deatails button");
  };

  handletextboxChange = (e) => {
    this.setState({ [e.target.id]: [e.target.value] }); //working correctly
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
                <p className={classes.cardCategoryWhite}>
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
                  </GridItem>
                  <GridItem xs={12} sm={12} md={4}>
                    <TextField
                      id="lastName"
                      label="Surname"
                      value={this.state.lastName}
                      onChange={this.handletextboxChange}
                    />
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
