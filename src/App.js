import Layout from './components/Layout/Layout';
import BurgerBuilder from "./container/BurgerBuilder/BurgerBuilder";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CheckOut from './container/CheckOut/CheckOut';
import Orders from './container/Orders/Orders';
import { Auth } from './container/Auth/Auth';

function App() {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route path="/" exact component={BurgerBuilder} />
          <Route path="/checkout" component={CheckOut} />
          <Route path="/order" component={Orders} />
          <Route path="/auth" component={Auth} />
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
