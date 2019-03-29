import React, { Component } from "react";

class PasswordShowHide extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hidden: true,
      password: ""
    };
  }

  handlePasswordChange = e => {
    this.setState({ password: e.target.value });
  };

  toggleShow = () => {
    this.setState(prevState => ({ hidden: !prevState.hidden }));
  };

  componentDidMount() {
    if (this.props.password) {
      this.setState({ password: this.props.password });
    }
  }

  render() {
    const { hidden, password } = this.state;
    return (
      <div>
        <input
          type={hidden ? "password" : "text"}
          value={password}
          onChange={this.handlePasswordChange}
        />
        <button onClick={this.toggleShow}>Show / Hide</button>
      </div>
    );
  }
}

export default PasswordShowHide;
