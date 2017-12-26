import React from 'react';
import ReactDOM from 'react-dom';
import Category from '../category'

class FormCategory extends React.Component {
  constructor(props){
    super(props)
    ///state goes here
    this.state = {
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
    this.props.onComplete(this.state.local);
    this.clearState();
  }

  componentWillReceiveProps(nextProps){
    if(nextProps.state){
      this.setState(nextProps.state)
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
