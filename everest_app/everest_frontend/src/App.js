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
  Contact,
  BookNow
} from './containers';

import { Provider } from 'react-redux';
import store from './store';
import ScrollToTop from './hoc/ScrollToTop';


const App = () => (
  <Provider store={store}>
      <Router>
        <Layout>
          <ScrollToTop>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/about" component={About} />
              <Route exact path="/contact" component={Contact} />
              <Route exact path="/blog" component={Blog} />
              <Route exact path="/blog/:slug/detail" component={BlogDetail} />
              <Route exact path="/services" component={Services} />
              <Route exact path="/service/:slug" component={ServiceDetail} />
              <Route exact path="/service/:slug/order" component={BookNow} />
              <Route exact path="/signup" component={SignUp} />
              <Route exact path="/login" component={SignIn} />
              <Route component={NotFound} />
            </Switch>
          </ScrollToTop>
        </Layout>
      </Router>
  </Provider>
)
export default App;