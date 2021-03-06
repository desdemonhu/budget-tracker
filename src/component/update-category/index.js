import React from 'react';
import ReactDOM from 'react-dom';
import Category from '../category'
import * as action from '../../reducer/action/category-action.js'

class UpdateCategory extends React.Component {
  constructor(props){
    super(props)
    ///state goes here
    this.state = {
      category: this.props.category,
      local: {
        ...this.props.category,
        name: this.props.category.name || '',
        budget: this.props.category.budget || 0,
      },
      view: this.props.showUpdateForm,
    }
  }

  nameUpdate = (event) => {
    this.setState({local: {...this.state.local,
                            name: event.target.value}
    })
  }

  budgetUpdate = (event) => {
    this.setState({local: {...this.state.local,
                          budget: event.target.value}})
  }

  UpdateCategory = (event) => {
    event.preventDefault();
    ///payload: {id: 'uuid', update:{name: 'name'}}
    this.props.categoryUpdate({
      key: event.target.value,
      update: this.state.local,
    })
    this.props.updateItem(this.state.local)
    this.props.hideUpdateForm();
  }

  componentWillReceiveProps(nextProps){
    if(nextProps.state){
      this.setState(nextProps.state)
    }
  }

  render(){
    return (
      <div>
        <h1>Update Form</h1>
        <form>
          <input type="text" value={this.state.local.name} onChange={this.nameUpdate}></input>
          <input type="number" value={this.state.local.budget} onChange={this.budgetUpdate}></input>
          <button type="submit" value={this.state.category.key} onClick={this.UpdateCategory}>Update Category</button>
        </form>
      </div>
    )
  }
}

export default UpdateCategory
