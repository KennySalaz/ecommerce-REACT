import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Product from './Product';
import {productsData} from './ProductData'



const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(3)
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

const Products = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
        <Grid container spacing={3}>

          {
            productsData.map( item => (

              <Grid item xs={12} sm={6} md={4} lg={3} >
              <Paper className={classes.paper}>
                  <Product key={item.id} product={item}   />
              </Paper>
            </Grid>
            ))
          }
        
         
        </Grid>
      </div>
    )
}

export default Products
