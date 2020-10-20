import React, { Component } from 'react'
import { connect } from 'react-redux';
import {dataNote} from '../firebaseConnect'
import NoteItem from './NoteItem';

class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data:[]
    }
  }
  UNSAFE_componentWillMount() {
    dataNote.on('value', (notes) => {
      var arr = [];
      notes.forEach(item =>{
        const key = item.key;
        const title = item.val().title;
        const value = item.val().value;
       arr.push({
         key:key,
         title:title,
         value:value
       })
      });
      this.setState({
        data:arr
      });
    })
  }
  
  getData = () => { 
    if(this.state.data){
      return(
        this.state.data.map( (item,key) => {
          return <NoteItem key={key} note={item} title ={item.title} content={item.value} number={item.key} />;
        })
      ) 
    }
  }
  isShowAdd = () => { 
    this.props.showFormAdd();
    this.props.showTitle("add");
  }
    render() {
      this.getData()
        return (
            <div className="conten col">
              <div className="add_button text-right mb-4">
                <button onClick={ () => this.isShowAdd()} type="button" name="" id="" className="btn btn-primary">Add schedule</button>
              </div>
              {this.getData()}
          </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
  return {
  }
}
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    showFormAdd: () => {
      dispatch({type:"CHANGE_EDIT_STATUS"})
    },
    showTitle:(act) =>{
      dispatch({
        type:"CHANGE_TITLE",
        act
      })
    }
  }
}
export default connect(mapStateToProps,mapDispatchToProps) (Content);