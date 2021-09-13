import React from 'react';
import {makeStyles, Theme} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import glass from "../assets/glass.jpg";
import progress from "../assets/progress.png"
import ProductImageWrapper from "./ProductImageWrapper";
import {Typography} from "@material-ui/core";


const useStyles = makeStyles((theme: Theme) => ({
    root: {
        width: "220px",
        margin: "20px"
    },
    bar: {
        height: "8px",
        backgroundColor: "#AD1FEA"
    },
    content: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between"
    },
    body2: {
        fontSize: 16,
        fontWeight: theme.typography.fontWeightBold,
        margin: "10px"
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
        fontWeight: 700
    },
    pos: {
        marginBottom: 12,
    }
}));

const ProductCard = () => {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <Box className={classes.bar}/>
            <CardContent className={classes.content}>
                <ProductImageWrapper src={glass}/>
                <ProductImageWrapper src={progress}/>
            </CardContent>
            <Typography className={classes.body2}>
                Glass
            </Typography>
            <CardActions>
                <Button size="small">Learn More</Button>
            </CardActions>
        </Card>
    );
};

export default ProductCard;