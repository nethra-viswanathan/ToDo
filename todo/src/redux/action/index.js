import axios from 'axios';
import {ADDNEWTODO,LISTTODO,TOGGLETODO,DELETETODO,UPDATENEWTODO} from './types';

//Base URL for all APIs
const URL = 'http://localhost:8080';


//API call for add method
export const addTodo = (title,desc,date,time) => async(dispatch) => {
    
    const res = await fetch(`${URL}/todo`, {
    method:'POST',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    },
    body: JSON.stringify( {"title": title,"description" : desc, "date": date, "time": time, "status":0} ) })
    .then(response => response.json())
   
    .then(value => 
       { 
        dispatch({ type: ADDNEWTODO, payload: value})}
        )
    


}

//API call to list all Todo items in the DB
export const getAllTodos = () => async(dispatch) => {
    try{
        const res = await fetch(`${URL}/list-todo`).then(res => res.json()).then(value => dispatch({ type: LISTTODO, payload: value}));
        
    }catch(error){
        console.log("Could not fetch item")
    }
}

//API call to switch from completed to incomplete
export const toggleTodos = (id,status) => async(dispatch) => {
        
        const res = await fetch(`${URL}/update-todo?id=${id}`,{
            method:'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({'status':status}) })
            .then(response => response.json())
            .then(value => 
            { 
                dispatch({ type: TOGGLETODO, payload: value})}
                )
                
    
}

//API call to delete an API
export const deleteTodos = (id) => async(dispatch) => {
    try{
        
        const res = await fetch(`${URL}/remove-todo?id=${id}`,{method : 'DELETE'})
        .then(res => res.json())
        .then(value => {dispatch({ type: DELETETODO, payload: value});console.log("vv",value)});
    }catch(error){
        console.log("Could not delete item")
    }
}

//API call to update an existing record
export const updateTodo = (id,title,desc,date,time) => async(dispatch) => {
    try{
        const res = await fetch(`${URL}/update-todo?id=${id}`, { 
            method : 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({"title": title,"description" : desc, "date": date, "time": time}) })
            .then(response => response.json())
            .then(value => 
            { 
            dispatch({ type: UPDATENEWTODO, payload: value})}
                )
    }catch(error){
        console.log("Could not update an item")
    }
}


