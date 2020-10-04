import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Layout from './hoc/Layout';
import {
  NotFound
} from './components';
import {
  Home,
  About,
  BlogDetail,
  Blog,
  Services,
  ServiceDetail,
  SignUp,
  SignIn,
  Contact
} from './containers';

const App = () => (
  <Router>
    <Layout>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/blog" component={Blog} />
        <Route exact path="/blog/:slug" component={BlogDetail} />
        <Route exact path="/services" component={Services} />
        <Route exact path="/service/:slug" component={ServiceDetail} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/signin" component={SignIn} />
        <Route component={NotFound} />
      </Switch>
    </Layout>
  </Router>
)
export default App;