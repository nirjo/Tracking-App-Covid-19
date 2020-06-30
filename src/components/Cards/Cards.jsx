import React from 'react';
import {Card,CardContent,Typography,Grid} from '@material-ui/core'; 
import CountUp from 'react-countup';


import styles from './Cards.module.css';

const Cards = ( { data : { confirmed,recovered,death,lastUpdate}}) => {
    if(!confirmed){
        return 'Loading...';
    }

    return (
        <div className={styles.container}>
        <Grid container spacing ={3} justify="center">
        <Grid item component={Card}>
        <CardContent>
            <Typography color="textSecondary" gutterBottom> Infected </Typography>
            <Typography varaint="h5"> REAL DATA </Typography>
             <CountUp start={0} end ={confirmed.value} duration={2.5} seperator="," />
             <Typography color="textSecondary" >{new Date(lastUpdate).toDateString()}</Typography>
            <Typography varaint="body2">Number of active cases of Covid-19</Typography>
        </CardContent>
        </Grid>
        <Grid item component={Card}>
        <CardContent>
            <Typography color="textSecondary" gutterBottom> Recoverd </Typography>
            <Typography varaint="h5"> REAL DATA </Typography>
            <CountUp start={0} end ={confirmed.value} duration={2.5} seperator="," />

            <Typography color="textSecondary" >{new Date(lastUpdate).toDateString()}</Typography>
            <Typography varaint="body2">Number of recoveries from Covid-19</Typography>
        </CardContent>
        </Grid>
         <Grid item component={Card}>
        <CardContent>
            <Typography color="textSecondary" gutterBottom> Deaths </Typography>
            <Typography varaint="h5"> REAL DATA </Typography>
            <Typography color="textSecondary" >{new Date(lastUpdate).toDateString()}</Typography>
            <Typography varaint="body2">Number of deaths caused by Covid-19</Typography>
        </CardContent>
        </Grid>
       

        
        </Grid>
        
        </div>
    )
}

export default Cards;