import React from 'react'
import Register from './Register'
import HomePage from './HomePage'
import { Dialog } from '@material-ui/core';
import { connect } from 'react-redux'

class Izberg extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isHomePage: false,
        }
    }

    handleSubmit = () => {
        const { user } = this.props
        if (user) {
            this.setState({
                isHomePage: true
            })
        }
    }

    render() {
        const { user } = this.props
        const { isHomePage } = this.state
        return (

            <Dialog
                open>
                {
                    isHomePage ?
                        <HomePage user={user} /> :
                        <Register
                            handleClick={this.handleSubmit}
                        />
                }
            </Dialog>
        )
    }
}

const mapStateToProps = state => {
    return {
        user: state.registration,
    }
}

export default connect(mapStateToProps)(Izberg) 