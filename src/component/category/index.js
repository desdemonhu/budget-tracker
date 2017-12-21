import React from 'react';
import ReactDOM from 'react-dom';

class Category extends React.Component {
  constructor(props){
    super(props)
    ///state goes here
    this.state = {
      store: this.props.store,
      category: this.props.category
    }
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
        </li>
      </div>
      )
  }
}

export default Category
