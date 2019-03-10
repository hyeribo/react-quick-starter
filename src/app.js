import ReactDOM from 'react-dom';
import React from 'react';
import { hot } from 'react-hot-loader/root';
import { BrowserRouter as Router } from 'react-router-dom';
import { Layout } from 'antd';

import Header from './layouts/Header';
import Content from './layouts/Content';
import Footer from './layouts/Footer';

const App = () => {
  return (
    <Router>
      <Layout>
        <Header/>
        <Content/>
        <Footer/>
      </Layout>
    </Router>
  )
}

const render = Component => {
  const App = hot(Component);
  ReactDOM.render(<App/>, document.getElementById("root"));
}
render(App);
