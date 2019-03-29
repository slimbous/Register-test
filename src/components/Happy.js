import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { styles } from "./form_style";
import { Typography, Button } from "@material-ui/core";

class HelloWorld extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      happy: false
    };
  }

  handleHumorChange = e => {
    this.setState(prevState => ({
      happy: !prevState.happy
    }));
  };

  render() {
    const { happy } = this.state;
    const { classes } = this.props;
    return (
      <div>
        <Typography>
          I guess you are {!happy ? "not" : " "} happy today!
        </Typography>
        <Button
          className={classes.container}
          variant="contained"
          color="secondary"
          onClick={this.handleHumorChange}
        >
          Change your mood
        </Button>
      </div>
    );
  }
}

export default withStyles(styles)(HelloWorld);
