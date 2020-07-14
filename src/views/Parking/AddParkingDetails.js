import React from "react";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";

// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import CustomInput from "components/CustomInput/CustomInput.js";
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
      flatNo: "304",
      firstName: "Priyanks",
      lastName: "shelar",
      parkingNo: "19",
    };
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
                      id="flat-no"
                      label="Flat no"
                      value={this.state.flatNo}
                    />
                  </GridItem>
                </GridContainer>
                <br></br>
                <GridContainer>
                  <GridItem xs={12} sm={12} md={3}>
                    <TextField
                      id="owner-name"
                      label="Owner name"
                      value={this.state.firstName}
                    />
                  </GridItem>
                  <GridItem xs={12} sm={12} md={4}>
                  <TextField
                      id="surname"
                      label="Surname"
                      value={this.state.lastName}
                    />
                  </GridItem>
                </GridContainer>
                <br></br>
                <GridContainer>
                  <GridItem xs={12} sm={12} md={6}>
                  <TextField
                      id="parking-no"
                      label="Parking no."
                      value={this.state.parkingNo}
                    />
                  </GridItem>
                </GridContainer>
              </CardBody>
              <CardFooter>
                <Button color="primary">Add parking</Button>
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
  flatNo : PropTypes.number,

};

export default withStyles(styles)(AddParkingDetails);
