import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import bulb from "../assets/bulb.svg";


const useStyles = makeStyles({
    root: {
        width: "275px",
    },
    bar: {
        height: "8px",
        backgroundColor: "#AD1FEA"
    },
    content: {
        display: "flex",
        flexDirection: "row",
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    }
});

const ProductCard = () => {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <Box className={classes.bar}/>
            <CardContent className={classes.content}>
                <img src={bulb} alt="logo"/>

            </CardContent>
            <CardActions>
                <Button size="small">Learn More</Button>
            </CardActions>
        </Card>
    );
};


export default ProductCard;