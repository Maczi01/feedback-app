import React from 'react';
import {makeStyles, ThemeProvider} from '@material-ui/core/styles';
import {CssBaseline} from '@material-ui/core';
import theme from './theme/theme';
import ProductCard from './components/ProductCard';
import MainTemplate from './templates/MainTemplate';
import PremiumAccessImage from './components/PremiumAccessImage';
import FeedbackCard from './components/FeedbackCard';
import UserCard from './components/UserCard';
import {Provider} from 'react-redux';

const useStyles = makeStyles(() => ({
    root: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
}));

const App = () => {
    const classes = useStyles();

    return (
        <Provider store={store}>
            <ThemeProvider theme={theme}>
                <CssBaseline/>
                <MainTemplate>
                    <PremiumAccessImage/>
                    <div className={classes.root}>
                        <ProductCard/>
                        <ProductCard/>
                        <ProductCard/>
                    </div>

                    <div className={classes.root}>
                        <FeedbackCard/>
                        <FeedbackCard/>
                        <FeedbackCard/>
                    </div>

                    <div className={classes.root}>
                        <UserCard/>
                        <UserCard/>
                        <UserCard/>
                    </div>
                </MainTemplate>
            </ThemeProvider>
        </Provider>
    );
};

export default App;
