import React from 'react';
import ReactDOM from 'react-dom';

class ExpenseForm extends React.Component {
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
    console.log(event.target.value);
    this.setState({local: {...this.state.local,
                          category: event.target.value}})
  }

  createExpense = (e) => {
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
        <h1>Form Expense</h1>
        <form>
        <select name="category-select" onFocus={this.categoryUpdate}
        onChange={this.categoryUpdate}>
        {this.props.categories.map((category, i) => {
            return <option key={i} value={category.key} >{category.name}</option>
        })}
        </select>
          <input type="text" value={this.state.local.name} onChange={this.nameUpdate}></input>
          <input type="number" value={this.state.local.price} onChange={this.priceUpdate}></input>
          <button type="submit" onClick={this.createExpense}>Add Category</button>
        </form>
      </div>
      )
  }
}

export default ExpenseForm
