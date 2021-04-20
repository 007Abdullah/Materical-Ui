import React from 'react'
import { Paper, Card, Typography, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    root: {
        backgroundColor: '#fdfdff'
    },
    pageheader: {
        padding: theme.spacing(4),
        display: 'flex',
        marginBottom: theme.spacing(3),
    },
    pageIcon: {
        display: 'inline-block',
        padding: theme.spacing(2),
        color: '#3c44b1'
    },
    pageTitle: {
        paddingLeft: theme.spacing(4),
        '& .MuiTypography-subtitle2': {
            opacity: '0.6'
        }
    }
}))


export default function Pageheader(props) {
    const classes = useStyles();
    const { title, subtitle, icon } = props
    return (
        <React.Fragment>
            <Paper elevation={0} square className={classes.root}>
                <div className={classes.pageheader}>
                    <Card className={classes.pageIcon}>
                        {icon}
                    </Card>
                    <div className={classes.pageTitle}>
                        <Typography variant="h6" component="div">
                            {title}
                        </Typography>
                        <Typography variant="subtitle2" component="div">
                            {subtitle}
                        </Typography>
                    </div>
                </div>

            </Paper>
        </React.Fragment>
    )
}
