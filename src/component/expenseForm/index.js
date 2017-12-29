import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux'

let button;

class ExpenseForm extends React.Component {
  constructor(props){
    super(props)
    ///state goes here
    this.state = {
      view: this.props.showExpenseUpdate,
      local: {
        name: '',
        price: 0,
      },
    }
  }

  updateForm = () => {
    this.setState({local: this.props.expense,})
    button = (
      <div>
        <button value={this.props.expense.key} onClick={this.expenseUpdate}>Update</button>
        <button onClick={this.props.hideExpenseUpdate}>Cancel</button>
      </div>
    )
  }

  clearState(){
    this.state.local = {
      name: '',
      price: 0,
      category: '',
    }
  }

  nameUpdate = (event) => {
    this.setState({local: {...this.state.local,
                          name: event.target.value}})
  }

  priceUpdate = (event) => {
    this.setState({local: {...this.state.local,
                          price: event.target.value}})
  }

  categoryUpdate = (event) => {
    this.setState({local: {...this.state.local,
                          category: event.target.value}})
  }

  createExpense = (e) => {
    e.preventDefault();
    this.props.onComplete(this.state.local);
    this.clearState();
  }

  expenseUpdate = (e) => {
    e.preventDefault()
    this.props.expenseUpdate({key: e.target.value,
                            update: this.state.local,})
    this.props.hideExpenseUpdate();
    this.clearState();
  }

componentWillMount(){
  if(this.props.expense && this.state.view === true){
    this.updateForm();
    }else {
      button = (
        <button type="submit" onClick={this.createExpense}>Add Expense</button>)
    }
}

componentDidUpdate(){
  if(this.state.local.name === ''){
    button = button = (
      <button type="submit" onClick={this.createExpense}>Add Expense</button>)
    }
}

// shouldComponentUpdate(nextProps, nextState){
//   if(nextProps.categories){
//     return true
//   }else {
//     return false
//   }
// }

  componentWillReceiveProps(nextProps){
    if(nextProps.state){
      this.setState(nextProps.state)
    }
  }

  render(){
    return (
      <div>
        <h1>Expense Form</h1>
        <form>
        <select name="category-select" onFocus={this.categoryUpdate}
        onChange={this.categoryUpdate}>
        {this.props.categories.map((category, i) => {
            return <option key={i}
            value={category.key}>{category.name}</option>
        })}
        </select>
          <input type="text" value={this.state.local.name} onChange={this.nameUpdate}></input>
          <input type="number" value={this.state.local.price} onChange={this.priceUpdate}></input>
          {button}
        </form>
      </div>
      )
  }
}

export default ExpenseForm
