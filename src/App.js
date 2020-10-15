import React, { Component } from 'react'
import './App.css';
import Menu from './component/Menu';
import Content from './component/Content'
import Add from './component/Add';
import { connect } from 'react-redux';


class App extends Component {
  showFormAdd = () => { 
    if(this.props.isShowAdd){
      return <Add /> ;
    }
  }
  render() {
    return (
      <div className="App">
      <Menu />
      <div className="container">
        <div className="row">
          <Content />
          {this.showFormAdd()}
        </div>
      </div>
    </div>
    )
  }
}
const mapStateToProps = (state, ownProps) => {
  return {
    isShowAdd: state.isAdd
  }
}
export default connect(mapStateToProps) (App);
