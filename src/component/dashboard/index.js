import React from 'react';
import ReactDOM from 'react-dom';
import Category from '../category'
import FormCategory from '../form-category'
import ExpenseForm from '../expenseForm'
import {connect} from 'react-redux'
import * as action from '../../reducer/action/category-action.js'
import * as expenseAction from '../../reducer/action/expense-action.js'

class Dashboard extends React.Component {
  constructor(props){
    super(props)
    ///state goes here
  }

  findExpenses = (categoryKey) =>{
    return this.props.state.expense.map(expense => {
      if(expense.category === categoryKey){
        return expense;
      }else {
        return '';
      }
    }
  )
  }

  render(){
    return (
      <div>
        <h1>Dashboard</h1>
        <h4>Category Form</h4>
        <FormCategory onComplete={this.props.categoryCreate}/>
        <h4>Expense Form</h4>
        <ExpenseForm categories={this.props.state.category} onComplete={this.props.expenseCreate} />
        <div>
          {this.props.state.category.map((category,i) =>{
            return (
              <div key={i}>
              <Category
              category={category}
              findExpenses={this.findExpenses}
              categoryUpdate={this.props.categoryUpdate}
              categoryDestroy={this.props.categoryDestroy}
              />
              </div>
            )
          })}
        </div>
      </div>
      )
    }
  }

let mapStateToProps = (state) => {
  return {
    state: state || [],
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    categoryCreate: (data) => dispatch(action.create(data)),
    categoryUpdate: (data) => dispatch(action.update(data)),
    categoryDestroy: (data) => dispatch(action.destroy(data)),
    expenseCreate: (data) => dispatch(expenseAction.create(data)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)
