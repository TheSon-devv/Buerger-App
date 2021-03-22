import { useEffect } from 'react';
import Layout from './components/Layout/Layout';
import BurgerBuilder from "./container/BurgerBuilder/BurgerBuilder";
import { BrowserRouter as Router, Switch, Route, withRouter, Redirect } from "react-router-dom";
import CheckOut from './container/CheckOut/CheckOut';
import Orders from './container/Orders/Orders';
import { Auth } from './container/Auth/Auth';
import Logout from './container/Logout/Logout';
import { useDispatch, useSelector } from 'react-redux';
import { authCheckState } from "./actions/auth";
import React from 'react';

function App() {
  const dispatch = useDispatch();
  const token = useSelector(state => state.auth.token !== null)

  useEffect(() => {
    dispatch(authCheckState())
  }, [])

  let routers = (
    <Switch>
      <Route path="/" exact component={BurgerBuilder} />
      <Route path="/auth" component={Auth} />
      <Redirect to="/" />
    </Switch>
  )

  if (token) {
    routers = (
      <Switch>
        <Route path="/" exact component={BurgerBuilder} />
        <Route path="/checkout" component={CheckOut} />
        <Route path="/order" component={Orders} />
        <Route path="/logout" component={Logout} />
        <Redirect to="/" />
      </Switch>
    )
  }


  return (
    <div>
      <Router>
        <Layout>
          {routers}
        </Layout>
      </Router>
    </div>
  );
}

export default App;
