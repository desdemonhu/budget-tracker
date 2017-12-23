import React from 'react';
import ReactDOM from 'react-dom';
import Category from '../category'
import FormCategory from '../form-category'
import {connect} from 'react-redux'
import * as action from '../../reducer/action/category-action.js'

class Dashboard extends React.Component {
  constructor(props){
    super(props)
    ///state goes here
  }

  render(){
    return (
      <div>
        <h1>Dashboard</h1>
        <FormCategory onComplete={this.props.categoryCreate}/>
        <ul>
          {this.props.state.map((category,i) =>{
            return (
              <div key={i}>
              <Category category={category}
              categoryUpdate={this.props.categoryUpdate}
              categoryDestroy={this.props.categoryDestroy}
              />
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
    state: state || [],
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    categoryCreate: (data) => dispatch(action.create(data)),
    categoryUpdate: (data) => dispatch(action.update(data)),
    categoryDestroy: (data) => dispatch(action.destroy(data)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)
