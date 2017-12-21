import React from 'react';
import ReactDOM from 'react-dom';
import UpdateCategory from '../update-category'
let store = require('../../index.js') ;

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
    store.category.dispatch({type: 'CATEGORY_DESTORY', payload: {id: event.target.value}})

    this.props.updateList(store.category.getState())
  }

  render(){
    return (
      <div>
      {console.log(this.state.category)}
        <li>{this.state.category.name}
          <ul>
            {Object.keys(this.state.category).map(key => {
              if(key !== 'name'){
                return <li>{key}: {this.state.category[key]}</li>
                }
              })
            }
          </ul>
          <button value={this.state.category.id} onClick={this.deleteCategory} >Delete</button>
          <button value={this.state.category.id} onClick={this.showUpdateForm}>Update</button>
          {
            this.state.local.showUpdateForm === true && (
              <UpdateCategory hideUpdateForm={this.hideUpdateForm} showUpdateForm={this.state.local.showUpdateForm} category={this.state.category}/>
            )
          }
        </li>
      </div>
      )
  }
}

export default Category
