import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { ShoppingCart } from '@material-ui/icons';
import { Badge } from '@material-ui/core';
import { Link } from "react-router-dom";

import { Link as RouterLink, useHistory } from "react-router-dom";
import { getAuth } from "firebase/auth"
import { firebaseApp } from '../firebase'
import { UsarContext } from '../estadoGlobal/UsarContexto'
import { actionTypes, initialState } from '../estadoGlobal/DefinicionFunciones'
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  appbar: {
    backgroundColor: '#ff5050'
  }
}));

const Navbar = () => {
  const classes = useStyles();
  const [{ addCar, user }, dispatch] = UsarContext()
  const auth = getAuth()
  const history = useHistory()


  const SignOut = () => {
    auth.signOut().then(user =>
      dispatch({
        type: actionTypes.USER_FIREBASE,
        user: null,
      })
    )
   /*  if (user) {
      dispatch({
        type: actionTypes.VACIAR_CARRITO,
        addCard: []
      })} */
    history.push('/')
  }

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appbar}>
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
        
          <IconButton variant="h6" className={classes.title} style={{ display: 'flex', justifyContent: 'flex-start' }}>
            <Link to="/">
              <img src="../img/descarga.png" alt="" style={{ width: '100px' }} />
            </Link>
          </IconButton>
          {user&& ( <div> {user.email} </div> )}

          {

            user ?
              (
                <Button onClick={SignOut} style={{ background: '#BEBBBB', padding: '10px' }} > SignOut </Button>
              ) :
              (
                <Link to="/signin" >
                  <Button style={{ background: '#BEBBBB', padding: '10px' }} > Login </Button>
                </Link>
              )
          }



          {
            user && (
              <Link to="/checkountItem" >
                <Button color="inherit">
                  <Badge badgeContent={addCar?.length} color='secondary'>
                    <ShoppingCart fontSize='large' color='primary' />
                  </Badge>

                </Button>
              </Link>
            )
          }


        </Toolbar>
      </AppBar >
    </div >
  );
}
export default Navbar