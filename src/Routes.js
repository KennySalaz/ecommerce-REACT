import React from 'react'
import { Switch, Route } from "react-router-dom";
import Products from './Componentes/Products';
import CheckoutPage from './Componentes/CheckoutPage';
import Product from './Componentes/Product';
import SignUp from './Componentes/SignUp';
import SingIn from './Componentes/SignIn'
import Checkout from './Componentes/PasarelaDePago/Checkout';

const Routes = () => {
    return (
        <Switch>
            <Route exact path='/checkountItem' component={CheckoutPage} />
            <Route exact path='/signup' component={SignUp} />
            <Route exact path='/signin' component={SingIn} />
            <Route exact path='/checkout' component={Checkout} />
            <Route exact path='/' component={Products} />

        </Switch>
    )



}
export default Routes
