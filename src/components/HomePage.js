import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { styles } from "./form_style";
import { Card, CardHeader, Typography } from "@material-ui/core";
import { connect } from "react-redux";
import HelloWorld from "./Happy";

class HomePage extends React.Component {
  render() {
    const { classes, user } = this.props;
    const name = user[0].username;
    return (
      <Card className={classes.container}>
        <CardHeader title={"Join us at Izberg"} />
        <Typography>Welcome, {name}</Typography>
        <HelloWorld user={name} />
      </Card>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.registration
  };
};

export default connect(mapStateToProps)(withStyles(styles)(HomePage));
