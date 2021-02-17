import React from 'react'
import { 
    BrowserRouter as Router,
    Switch,
    Route,
    Link,

}from "react-router-dom";
import Cart from './pages/Cart';
import Home from './pages/Home';
import Products from './pages/Products'
import Register from './pages/Register';
function Navbar() {
    return (
        <Router>
            <nav>
                <ul>
                    <li>
                        <link to ="/">Home</link>
                    </li>
                    <li>
                        <link to = "/products">Products</link>
                    </li>
                    <li>
                        <link to = "/register">Register</link>
                    </li>
                    <li>
                        <link to ="/cart">Cart</link>
                    </li>
                    <li>
                        <link to ="/login">Log in</link>
                    </li>
                </ul>
                </nav> 
            <Switch>
                <Route path ="/Products">
                <Products />
                </Route>
                <Route path ="/Register">
                    <Register />
                    </Route>
                    <Route path ="/Cart">
                        <Cart />
                        <Route path ="/">
                        </Route>
                <Route path ="/Login">
                    <Login />
                    </Route>
                <Home />
                </Route>
            </Switch>
          </Router >
       
    )
}

export default Navbar
