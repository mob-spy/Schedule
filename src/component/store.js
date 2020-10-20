import {dataNote} from "../firebaseConnect";

var redux = require("redux");
const noteInitialState = {
    showForm:false,
    editItem:{},
    showTitle:""
}
const noteReducer = (state = noteInitialState, action) => {
    switch (action.type) {
        case "ADD_DATA":
            dataNote.push(action.getItem)
            return {...state,editItem:{}}
        case "CHANGE_EDIT_STATUS":
            console.log(state.showForm);
            return {...state,editItem:{},showForm:!state.showForm}
        case "CHANGE_TITLE":
            return {...state,showTitle:action.act}
        case "DELETE":
            dataNote.child(action.idNote).remove()
            return state
        case "GET_EDIT_DATA":
            return {...state,editItem:action.editObject}
        case "EDIT":
            dataNote.child(action.editItem.id).update({
                title:action.editItem.title,
                value:action.editItem.value
            })
            return {...state,editItem:{},showForm:!state.showForm}
        default:
            return state
        }
    }
var store = redux.createStore(noteReducer);

export default store;