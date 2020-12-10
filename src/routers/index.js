import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// importing all the themes
import Home from "../themes/home";
import Security from "../themes/security";
import Pricing from '../themes/pricing';
import Faq from "../themes/faq";
import NotFound from "../themes/404";
import Guidelines from "../themes/guidelines";
import Privacy from "../themes/privacy";
import Terms from "../themes/terms";
import About from "../components/AboutUs";
import ContactSales from "../themes/ContactSales";
import Copyright from "../themes/Copyright";

export default class Routes extends React.PureComponent {
  render() {
    return (
      <React.Fragment>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/home" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/pricing" component={Pricing} />
            <Route exact path="/sales" component={ContactSales} />
            <Route exact path="/security" component={Security} />
            <Route exact path="/faq" component={Faq} />
            <Route exact path="/copyright" component={Copyright} />
            <Route exact path="/guidelines" component={Guidelines} />
            <Route exact path="/privacy" component={Privacy} />
            <Route exact path="/terms" component={Terms} />
            <Route exact path="*" component={NotFound} />
          </Switch>
        </Router>
      </React.Fragment>
    );
  }
}
