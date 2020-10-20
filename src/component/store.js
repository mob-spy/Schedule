import {dataNote} from "../firebaseConnect";

var redux = require("redux");
const noteInitialState = {
    isAdd:false,
    editItem:{},
    showTitle:""
}
const noteReducer = (state = noteInitialState, action) => {
    switch (action.type) {
        case "ADD_DATA":
            dataNote.push(action.getItem)
            return state
        case "CHANGE_EDIT_STATUS":
            return {...state,isAdd:!state.isAdd}
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
            return {...state,editItem:{}}
        default:
            return state
        }
    }
var store = redux.createStore(noteReducer);

export default store;