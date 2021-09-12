import React from "react";
import {AppBar, Container, Toolbar, Typography} from "@material-ui/core";

const Footer = () => (
    <AppBar position="static" color="primary">
        <Container maxWidth="md">
            <Toolbar>
                <Typography variant="body1" color="inherit">
                    © 2019 Gistia
                </Typography>
            </Toolbar>
        </Container>
    </AppBar>
)

export default Footer;