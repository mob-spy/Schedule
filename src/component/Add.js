import React, { Component } from 'react'
import { connect } from 'react-redux';

class Add extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // currItem:[]
            title:'',
            value:'',
            id:''
        }
    }

    UNSAFE_componentWillMount() {
        if(this.props.item){
            this.setState({
                title:this.props.item.title,
                value:this.props.item.value,
                id:this.props.item.key
                // currItem:this.props.item
            })
        }
    }
    
    isChange = (event) => { 
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]:value
        })
    }

    addData = () => {
        if(this.state.id){
            var editObject = {};
            editObject.id = this.state.id;
            editObject.title = this.state.title;
            editObject.value=this.state.value;
            this.props.edit(editObject);
        }else{
            if((typeof this.state.title !== "undefined" && typeof this.state.value !== "undefined") && (this.state.title !== "")){
                var item = [];
                item.title = this.state.title;
                item.value = this.state.value;
        
                this.props.addDataStore(item);
                this.setState({
                    title:'',
                    value:'',
                    id:''
                });
            }
        }
    }
    closeForm = () => { 
        this.props.showForm();
    }
    showTitle = () => { 
        if(this.props.showTitle === "add"){
            return <h3 className="text-center">Add schedule</h3>;
        }else if(this.props.showTitle === "edit"){
            return <h3 className="text-center">Edit schedule</h3>
        }
    }
    render() {
        return (
            <div className="add col-4">
                {this.showTitle()}
                <form className="text-left">
                    <div className="form-group">
                        <label htmlFor="title_schedule">Title schedule</label>
                        <input defaultValue={this.state.title} placeholder="Enter title" type="text" name="title" onChange={ (event) => this.isChange(event)} className="form-control" id="title_schedule" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="content_schedule">Content</label>
                        <textarea defaultValue={this.state.value} placeholder="Enter content" name="value" onChange={ (event) => this.isChange(event)} className="form-control"  rows={3} />
                    </div>
                    <button type="reset" className="btn btn-primary mb-2" style={{width: '100%'}} onClick={ () => this.addData()} >Save</button>
                    <button type="reset" className="btn btn-secondary" style={{width: '100%'}} onClick={ () => this.closeForm()} >Close</button>
                </form>
            </div>

        )
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        item: state.editItem,
        showTitle: state.showTitle
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        addDataStore: (getItem) => {
            dispatch({type:"ADD_DATA",getItem})
        },
        showForm: () => {
            dispatch({
                type:"CHANGE_EDIT_STATUS"
            })
        },
        edit: (editItem) => {
            dispatch({
                type:"EDIT",
                editItem
            })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Add);