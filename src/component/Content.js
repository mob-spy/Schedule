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
    return(
      this.state.data.map( (item,key) => {
        return <NoteItem key={key} title ={item.title} content={item.value} number={item.key} />;
      })
    )
  }
  isShowAdd = () => { 
    this.props.showFormAdd();
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
      dispatch({type:"IS_SHOW_ADD"})
    }
  }
}
export default connect(mapStateToProps,mapDispatchToProps) (Content);