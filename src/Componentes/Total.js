import React from 'react'
import accounting from 'accounting'
import { Button, makeStyles } from '@material-ui/core'
import { addCarTotal} from '../estadoGlobal/DefinicionFunciones'
import { UsarContext } from '../estadoGlobal/UsarContexto'
import { Link } from "react-router-dom";



const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        Height: "20vh"
    },


}))



const Total = () => {
    const classes = useStyles();

    const [{addCar} , dispatch] = UsarContext()

   
    return (  
    <div className={classes.root}>
        <h5> Total items: {addCar?.length} </h5>
        <h5> {accounting.formatMoney(addCarTotal(addCar), "$")} </h5>
        <Link to={"/checkout"}>  
        <Button className={classes.button} variant="contained" color='secondary'>
            Checkout
        </Button> 
        </Link>
      
    </div>
    )

      
      
    
}

export default Total
