import React, { Component } from 'react';

import './App.css';
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom';

import Container from './Container.js';
import PageNotFound from './PageNotFound.js';

class App extends Component {
  render() {
    return (

      <BrowserRouter>
        <div className="container">
      {/* returns only the first matching route*/}
          <Switch>
      {/* route for the links provided*/}
            <Route exact path="/" component={ (props) => <Container url={props.match.url} /> } />
            <Route path="/icecream" component={ () => <Container tag="Icecream" /> } />
            <Route path="/cupcakes" component={ () => <Container tag="Cupcakes" /> } />
            <Route path="/lollipops" component={ () => <Container tag="Lollipops" /> } />
       {/* route for the search bar n pass url props*/}
            <Route path="/search" component={ (props) => <Container tag="Food" url={props.match.url} /> } />
       {/*Page not found if none of the links match the routes*/}
            <Route component={PageNotFound} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
