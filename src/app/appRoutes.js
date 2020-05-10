import React from 'react';
import {Switch, Route, Router, Redirect } from "react-router-dom";
import {history } from './services/history'
import Home from './home';
import Store from './store/store';
import { Provider } from 'react-redux';
import ProductGroceryList from './grocery/components/product/ProductGroceryList';
import ErrorBoundary from './grocery/components/error-boundary/error-boundary';
import LazyComponent from './grocery/components/LazyComponent';

const usergroceryLazy = React.lazy(()=> import('./grocery/components/Cart/UserGroceryList'));
const UserGroceryList = (props) =><LazyComponent component={usergroceryLazy} {...props} ></LazyComponent>

export default function AppRoutes () {
      return (
         <React.Fragment>
            <Router history={history}>
            <Provider store = {Store} >

                <div className="App mainDivPadding">
                    <ErrorBoundary>
                        <Home />
                        <Switch>
                            <Route exact path="/" component={ProductGroceryList}/>
                            <Route exact path="/AddItem" component={UserGroceryList}/>
                            <Route><Redirect to="/" /> </Route>
                        </Switch>
                    </ErrorBoundary>
                </div>
            </Provider>

            </Router>
        
        </React.Fragment>
      )
}