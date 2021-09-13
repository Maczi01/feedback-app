import React from "react";
import {AppBar, Box, Container, TableFooter, Theme, Toolbar, Typography} from "@material-ui/core";
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        // position: "absolute",
        // bottom: 0,
        width: "100%",
        minHeight: "64px",
    }
}));

const Footer = () => {
    const classes = useStyles();

    return (
        <footer className={classes.root}>
            <Box bgcolor="text.primary">
                <Container maxWidth="md">
                    <Toolbar>
                        <Typography variant="body1" color="textSecondary">
                            Designed with 😺 by Mati
                        </Typography>
                    </Toolbar>
                </Container>
            </Box>
        </footer>
    )
}
export default Footer;
