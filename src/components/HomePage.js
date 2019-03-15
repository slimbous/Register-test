import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import { styles } from './form_style'
import { Card, CardHeader, Typography } from '@material-ui/core';

class HomePage extends React.Component {

    render() {
        const { classes, user } = this.props
        
        return (
            <Card className={classes.container}>
                <CardHeader title={"Join us at Izberg"} />
                <Typography>
                    Welcome, {user[0].username}
                </Typography>
            </Card>
        )
    }
}

export default (withStyles(styles))(HomePage)