import React from 'react';
import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Header from './components/Header';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import PetProfile from './pages/PetProfile/PetProfile';
import SingleTail from './pages/SingleTail';
import NoMatch from "./pages/NoMatch";

import './index.css';

const client = new ApolloClient({
  request: (operation) => {
    const token = localStorage.getItem('id_token');
    operation.setContext({
      headers: {
        authorization: token ? `Bearer ${token}` : '',
      },
    });
  },
  uri: '/graphql',
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="generic">
          <Header />
          
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/signup" component={Signup} />
              <Route exact path="/profile/:username?" component={PetProfile} />
              <Route exact path="/view-tail" component={SingleTail} /> 
              <Route component={NoMatch} />
            </Switch>
          
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
