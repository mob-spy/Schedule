import {dataNote} from "../firebaseConnect";

var redux = require("redux");
const noteInitialState = {
    isAdd:false
}
const noteReducer = (state = noteInitialState, action) => {
    switch (action.type) {
        case "ADD_DATA":
            dataNote.push(action.getItem)
            return state
        case "CHANGE_EDIT_STATUS":
            return state
        case "DELETE":
            dataNote.child(action.idNote).remove()
            return state
        case "IS_SHOW_ADD":
            return {isAdd:!state.isAdd}
        default:
            return state
        }
    }
var store = redux.createStore(noteReducer);

export default store;