import React from 'react';
import ReactDOM from 'react-dom';
import Category from '../category'
import FormCategory from '../form-category'
let store = require('../../index.js') ;

class Dashboard extends React.Component {
  constructor(props){
    super(props)
    ///state goes here
    this.state = {store: store.category.getState()}
  }

  updateList = (newStore) =>{
    this.setState({store: newStore})
  }

  render(){
    return (
      <div>
        <h1>Dashboard</h1>
        <FormCategory store={store} updateList={this.updateList}/>
        <ul>
          {this.state.store.map(category =>{
            return (
              <div>
              <Category category={category} updateList={this.updateList}/>
              </div>
            )
          })}
        </ul>
      </div>
      )
  }
}

export default Dashboard
