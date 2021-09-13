import React from 'react';
import glass from "../assets/glass.jpg";
import {Box, makeStyles} from "@material-ui/core";

interface Props {
    src: string
}

const useStyles = makeStyles({
    root: {
        width: "70px",
        height: "70px",
        overflow: "hidden",
        margin: "0 10px"
    },
});
const ProductImageWrapper: React.FC<Props> = ({src}) => {

    const classes = useStyles();

    return (
        <Box>
            <img className={classes.root} src={src} alt="logo"/>
        </Box>
    )
}
export default ProductImageWrapper;

