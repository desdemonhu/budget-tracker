import React from 'react';
import ReactDOM from 'react-dom';
import Category from '../category'
import uuid from 'uuid'
let store = require('../../index.js') ;

class FormCategory extends React.Component {
  constructor(props){
    super(props)
    ///state goes here
    this.state = {
      store: this.props.store,
      local: {
        name: '',
        budget: 0,
      }
    }
  }

  clearState(){
    this.state.local = {
      name: '',
      budget: 0,
    }
  }

  nameUpdate = (event) => {
    this.setState({local: {...this.state.local,
                          name: event.target.value}})
  }

  budgetUpdate = (event) => {
    this.setState({local: {...this.state.local,
                          budget: event.target.value}})
  }

  createCateogry = (e) => {
    e.preventDefault();
    let category = this.state.local;
    category.id = uuid.v1();
    category.stamp = new Date().toString();

    store.category.dispatch({type: 'CATEGORY_CREATE', payload: category})

    this.props.updateList(store.category.getState());

    this.clearState();
  }

  updateCategory = (e) => {

  }

  render(){
    return (
      <div>
        <h1>Form Category</h1>
        <form>
          <input type="text" value={this.state.local.name} onChange={this.nameUpdate}></input>
          <input type="number" value={this.state.local.budget} onChange={this.budgetUpdate}></input>
          <button type="submit" onClick={this.createCateogry}>Add Category</button>
        </form>
      </div>
      )
  }
}

export default FormCategory
