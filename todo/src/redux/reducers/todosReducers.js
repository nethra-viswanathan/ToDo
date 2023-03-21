import * as actionTypes from '../action/types'
//Reducers to store all changes into states using redux
export const todosReducers = (state = [], action) => {
    switch(action.type){
        case actionTypes.ADDNEWTODO:
            // Adding a todo item
            return [action.payload, ...state];
        case actionTypes.LISTTODO:
            // Listing a todo item
            return action.payload
        case actionTypes.TOGGLETODO:
            // Changing status of an item
            return state.map(todo => (
                todo._id === action.payload._id ? {...todo,status: !todo.status} : todo
            ))
        case actionTypes.DELETETODO:
            // Deleting a item from state
            return state.filter(todo => todo._id !== action.payload._id)
        case actionTypes.UPDATENEWTODO:
            // Updating an existing todo item in state
            return state.map(todo => (
                todo._id === action.payload._id ? {...todo,title: action.payload.title, description: action.payload.description, date:action.payload.date,time:action.payload.time} : todo
            ))
        default:
            return[];

    }
} 