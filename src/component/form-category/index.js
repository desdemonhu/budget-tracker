import React from 'react';
import ReactDOM from 'react-dom';
import Category from '../category'
import uuid from 'uuid'
import * as action from '../../reducer/action/category-action.js'
let store = require('../../index.js')

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
    // store.category.dispatch(action.create(this.state.local))
    //
    // this.props.updateList(store.category.getState());
    this.props.onComplete(this.state.local);

    this.clearState();
  }

  componentWillReceiveProps(nextProps){
    if(nextProps.store){
      this.setState(nextProps.store)
    }
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
