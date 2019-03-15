import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { styles } from './form_style'
import { Button, TextField, Card, CardHeader, CardContent, Snackbar, SnackbarContent, Fade } from '@material-ui/core';
import { register } from '../actions/userActions'
import { connect } from 'react-redux'
import { strongRegex, weakRegex, veryWeakRegex } from './utils'

class Register extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            user: {
                username: '',
                password: "",
                confirmPwd: ""
            },
            message: "",
            open: false
        }
    }

    handleChange = (event) => {
        const { user } = this.state
        this.setState({
            user: {
                ...user,
                [event.target.name]: event.target.value
            }
        });
    }

    handleClose = () => {
        this.setState({
            open: false
        })
    }


    handleSubmit = (event) => {
        const { handleClick, register } = this.props
        const { user } = this.state;

        const isValidateStrong = user.username
            && user.password
            && user.password === user.confirmPwd
            && strongRegex.test(user.password)

        const isValidateWeek = user.username
            && user.password
            && user.password === user.confirmPwd
            && weakRegex.test(user.password)

        const isValidateVeryWeek = user.username
            && user.password
            && user.password === user.confirmPwd
            && veryWeakRegex.test(user.password)

        if (isValidateStrong) {
            register(user);
            handleClick();
        }
        else if (!(user.password === user.confirmPwd)) {
            this.setState({
                message: "Password re-typed must match password.",
                open: true
            })
        }

        else if (isValidateWeek) {
            this.setState({
                message: "Password strength: weak.",
                open: true
            })
        }
        else if (isValidateVeryWeek) {
            this.setState({
                message: "Password strength: very weak.",
                open: true
            })
        }
    }

    render() {
        const { classes } = this.props;
        const { user, open, message } = this.state
        return (
            <Card className={classes.container}>
                <CardHeader title={"Join us at Izberg"} />
                <CardContent>
                    <TextField
                        required
                        value={user.username}
                        label="Username"
                        id="outlined-required"
                        type="Required"
                        className={classes.textField}
                        margin="normal"
                        variant="outlined"
                        onChange={this.handleChange}
                        name="username"
                    />

                    <TextField
                        required
                        value={user.password}
                        label="Password"
                        className={classes.textField}
                        type="password"
                        margin="normal"
                        variant="outlined"
                        onChange={(this.handleChange)}
                        name="password"
                    />

                    <TextField
                        required
                        value={user.confirmPwd}
                        id="outlined-password-input"
                        label="Re-type Password"
                        className={classes.textField}
                        type="password"
                        margin="normal"
                        variant="outlined"
                        onChange={this.handleChange}
                        name="confirmPwd"
                    />

                </CardContent>

                <Button
                    variant="contained"
                    color="primary"
                    onClick={this.handleSubmit}>
                    Count me in
                </Button>

                <Snackbar
                    open={open}
                    onClose={this.handleClose}
                    TransitionComponent={Fade}
                    autoHideDuration={5000}
                >
                    <SnackbarContent
                        message={<span id="message-id">{message}</span>}
                        classes={{ root: classes.snackbar }}
                    />
                </Snackbar>
            </Card>
        )
    }
}

function mapStateToProps(state) {
    return {
    }
}

const mapDispatchToProps = (dispatch) => ({
    register: (user) => {
        dispatch(register(user))
    },
})

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Register));