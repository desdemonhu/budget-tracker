import React from 'react';
import ReactDOM from 'react-dom';
import UpdateCategory from '../update-category'
import * as action from '../../reducer/action/category-action.js'

class Category extends React.Component {
  constructor(props){
    super(props)
    ///state goes here
    this.state = {
      category: this.props.category,
      local: {
        showUpdateForm: false
      }
    }
  }

  showUpdateForm = () => {
    this.setState({local:{showUpdateForm: true}})
  }

  hideUpdateForm = () => {
    this.setState({local: {showUpdateForm: false}})
  }

  deleteCategory = (event) => {
    this.props.categoryDestroy(event.target.value);
  }

  updateItem = (update) => {
    this.setState({category: update})
  }

  componentWillReceiveProps(nextProps){
    if(nextProps.state){
      this.setState(nextProps.state)
    }
  }


  render(){
    return (
      <div>
        <h3>{this.state.category.name}</h3>
          <ul>
            {Object.keys(this.state.category).map((key,i) => {
              if(key !== 'name'){
                return <li key={i}>{key}: {this.state.category[key]}</li>
                }
              })
            }
          </ul>
          <button value={this.state.category.key} onClick={this.deleteCategory} >Delete</button>
          <button value={this.state.category.key} onClick={this.showUpdateForm}>Update</button>
          {
            this.state.local.showUpdateForm === true && (
              <UpdateCategory
              categoryUpdate={this.props.categoryUpdate}
              updateItem={this.updateItem} hideUpdateForm={this.hideUpdateForm} showUpdateForm={this.state.local.showUpdateForm} category={this.state.category}/>
            )
          }
      </div>
      )
  }
}

export default Category
