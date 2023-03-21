import { useEffect,useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {getAllTodos, toggleTodos, deleteTodos} from '../../redux/action/index'
import '../../../node_modules/font-awesome/css/font-awesome.min.css'
import Modal from '../Modal/Modal'
import React from "react";
const Todo = () => {
    
    const dispatch = useDispatch();
    let [id,setId] = useState(0); 
    //getting Id on click the edit icon
    let [editId,setEditId] = useState(0); 
    //Show/hide modal
    const [show,setShow] = useState(false);
    //Toggle to show description
    let [showDe,setShowDesc] = useState("false");
    
    const todos = useSelector(state => state.todos)

    useEffect(() => {
        dispatch(getAllTodos())
    },[])
    
    //show description on clicking the task name
    const handleToggle = (id) => {
        setId(id);
        setShowDesc(!showDe);
    };

    //show pop and set ID while clicking on the update button
    const updateForm = (id) =>{
        setShow(true)
        setEditId(id);
    }

    return(
        <div>
            {/* loop the elements stored in DB */}
        { todos.map((todo) => 
             
             (
                <div class="list-item">
                    <div className={todo?.status ? "task completed" : "task"}>
                        <div class="head" onClick={() => {handleToggle(todo?._id)}}>
                            <span class="title">{todo?.title} 
                            </span>
                        
                            
                        </div>
                        <div className={id === todo?._id && showDe ? "desc show" : "desc hide"}>
                            <div class="descChild">
                                <div>{todo?.description}</div>
                                <div class="data_time">
                                    <span>{todo?.date} </span><span>{todo?.time}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="completed-parent" >
                        <svg onClick={() => dispatch(toggleTodos(todo?._id,!todo?.status))} class="complete" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 620 630"><path d="M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"></path></svg>   
                        <svg onClick={() => dispatch(deleteTodos(todo?._id))} class="delete" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 550 630"><path d="M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM184 232H328c13.3 0 24 10.7 24 24s-10.7 24-24 24H184c-13.3 0-24-10.7-24-24s10.7-24 24-24z"/></svg>             
                        <svg onClick={() => updateForm(todo?._id)} xmlns="http://www.w3.org/2000/svg" class="edit" viewBox="0 0 550 630"><path d="M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L362.3 51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.8 15.7-7.4 21.9-13.5L437.7 172.3 339.7 74.3 172.4 241.7zM96 64C43 64 0 107 0 160V416c0 53 43 96 96 96H352c53 0 96-43 96-96V320c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H96z"/></svg>  
                    </div>
                </div>
        )
          
        )}
        <Modal show={show}  onClose = {() => setShow(false)} edit = {true} id={editId}/>

        </div>
        
    )
}

export default Todo;