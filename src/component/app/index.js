import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route} from 'react-router-dom';
import Dashboard from '../dashboard';

class App extends React.Component {
  constructor(props){
    super(props)
    ///state goes here
  }

  render(){
    return (
      <div>
        <header>
          <h1>~APP~</h1>
        </header>
        <BrowserRouter>
          <div>
            <Route exact path='/' component={Dashboard} />
          </div>
        </BrowserRouter>
      </div>
      )
  }
}

export default App
