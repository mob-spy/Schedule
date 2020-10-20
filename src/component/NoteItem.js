import React, { Component } from 'react'
import { connect } from 'react-redux';

class NoteItem extends Component {
  removeNote = (event,idNote) => { 
    event.preventDefault();
    this.props.deleteNote(idNote);
  }
  updateNote = (event,) => {
    event.preventDefault();
    this.props.showForm();
    this.props.getEditData(this.props.note);
    this.props.showTitle("edit");
   }
    render() {
        return (
           <div id={"accordian-"+this.props.number} role="tablist" aria-multiselectable="true">
             <div className="card text-left">
               <div className="card-header" role="tab" id={"section1Header-"+this.props.number}>
                  <h5 className="mb-0">
                    <a data-toggle="collapse" data-parent={"#accordian-"+this.props.number} href={"#"+this.props.number} aria-expanded="true" aria-controls="section1ContentId">
                      {this.props.title}
                    </a>
                    <a href={"remove"+this.props.number} className="float-right" onClick={ (event) => this.removeNote(event,this.props.number)}><i className="fa fa-trash" aria-hidden="true"></i> </a>
                    <a href={"update"+this.props.number} className="float-right mr-2" onClick={ (event) => this.updateNote(event)}><i className="fa fa-cog" aria-hidden="true"></i> </a>
                  </h5>
               </div>
               <div id={this.props.number} className="collapse in" role="tabpanel" aria-labelledby={"section1Header-"+this.props.number}>
                 <div className="card-body">
                   {this.props.content}
                 </div>
               </div>
             </div>
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
    deleteNote: (idNote) => {
      dispatch({
        type:"DELETE",
        idNote
      })
    },
    showForm:() =>{
      dispatch({
        type:"CHANGE_EDIT_STATUS"
      })
    },
    getEditData:(editObject) =>{
      dispatch({
        type:"GET_EDIT_DATA",
        editObject
      })
    },
    showTitle:(act) =>{
      dispatch({
        type:"CHANGE_TITLE",
        act
      })
    }
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(NoteItem)