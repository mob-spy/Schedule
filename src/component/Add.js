import React, { Component } from 'react'
import { connect } from 'react-redux';

class Add extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title:'',
            value:''
        }
    }
    
isChange = (event) => { 
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
        [name]:value
    })
}

    addData = (title,content) => {
        console.log(title);
        console.log(content);
        if(title !== "" && connect !== ""){
            console.log("add")
            var item = [];
            item.title = title;
            item.value = content;
    
            this.props.addDataStore(item);
            this.setState({
                title:'',
                value:''
            });
        }
    }
    closeForm = () => { 
        this.props.showFormAdd();
    }
    render() {
        return (
            <div className="add col-4">
                <h3 className="text-center">Add schedule</h3>
                <form className="text-left">
                    <div className="form-group">
                        <label htmlFor="title_schedule">Title schedule</label>
                        <input type="text" name="title" onChange={ (event) => this.isChange(event)} className="form-control" id="title_schedule" placeholder="Enter title" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="content_schedule">Content</label>
                        <textarea name="value" onChange={ (event) => this.isChange(event)} className="form-control"  rows={3} />
                    </div>
                    <button type="reset" className="btn btn-primary mb-2" style={{width: '100%'}} onClick={ () => this.addData(this.state.title,this.state.value)} >Add schedule</button>
                    <button type="reset" className="btn btn-secondary" style={{width: '100%'}} onClick={ () => this.closeForm()} >Close</button>
                </form>
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
        addDataStore: (getItem) => {
            dispatch({type:"ADD_DATA",getItem})
        },
        showFormAdd: () => {
            dispatch({type:"IS_SHOW_ADD"})
          }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Add);