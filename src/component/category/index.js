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
      expenses: this.props.expenses,
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
        <h3>{this.state.category.name}
          <button value={this.state.category.key} onClick={this.deleteCategory} >Delete</button>
          <button value={this.state.category.key} onClick={this.showUpdateForm}>Update</button>
          </h3>
          {
            this.state.local.showUpdateForm === true && (
              <UpdateCategory
              categoryUpdate={this.props.categoryUpdate}
              updateItem={this.updateItem} hideUpdateForm={this.hideUpdateForm} showUpdateForm={this.state.local.showUpdateForm} category={this.state.category}/>
            )
          }
          {
            this.props.findExpenses(this.state.category.key).length !== 0 &&
            <div>
              <h4>Expenses</h4>
              <div>
              <ul>
                {this.props.findExpenses(this.state.category.key).map((expense,i) => {
                  return (
                    <li key={i}>
                      <h5>{expense.name} - Price: {expense.price}
                        <button>Update</button>
                        <button>Delete</button>
                      </h5>
                    </li>)
                  })
                }
              </ul>
            </div>
          </div>
          }

      </div>
      )
  }
}

export default Category
