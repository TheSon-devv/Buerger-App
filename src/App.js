import Layout from './components/Layout/Layout';
import BurgerBuilder from "./container/BurgerBuilder/BurgerBuilder";
import { BrowserRouter as Router, Switch, Link, Route } from "react-router-dom";
import CheckOut from './container/CheckOut/CheckOut';
import Orders from './container/Orders/Orders';

function App() {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route path="/" exact component={BurgerBuilder} />
          <Route path="/checkout" component={CheckOut} />
          <Route path="/order" component={Orders} />
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
