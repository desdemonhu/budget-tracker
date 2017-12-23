import React from 'react';
import ReactDOM from 'react-dom';
import Category from '../category'
import FormCategory from '../form-category'
import {connect} from 'react-redux'
import * as action from '../../reducer/action/category-action.js'
let store = require('../../index.js') ;

class Dashboard extends React.Component {
  constructor(props){
    super(props)
    ///state goes here
    this.state = {store: store.category.getState()}
  }

  updateList = () =>{
    this.setState({store: store.category.getState()})
  }

  render(){
    return (
      <div>
        <h1>Dashboard</h1>
        <FormCategory store={store} onComplete={this.props.categoryCreate}/>
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

let mapStateToProps = (state) => {
  return {
    state: state,
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    categoryCreate: (data) => dispatch(action.create(data))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)
