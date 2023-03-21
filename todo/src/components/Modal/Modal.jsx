import { useState } from "react";
import { useDispatch,useSelector } from "react-redux";
import { addTodo,updateTodo } from "../../redux/action";
import {Todo} from "../TodoList/TodoList"

const Modal = props => {
    //getting stored states
    const todos = useSelector(state => state.todos)
    //checking if the pop up is for add or edit
    let isEdit = useState(props.edit)
    let currData;
    if(isEdit[0]){
        //getting data of clicked todo-item using id 
        currData =todos.find(obj => {
            return obj?._id === props?.id;
          })
        
    }
    const dispatch = useDispatch();
    if(!props.show){
        return null;
    }
    //Submit add/edit form function
    const onFormSubmit = (event) => {
        //prevent the screen from loading
        event.preventDefault();
        //getting form data
        const data = new FormData(event.target);
        //making API calls based on add or edit pop up
        if(!isEdit[0]){
            dispatch(addTodo(data.get('title'),data.get('description'),data.get('date'),data.get('time')));
            
        }else{
            dispatch(updateTodo(props.id,data.get('title'),data.get('description'),data.get('date'),data.get('time')));
        }
        //closing the modal
        props.onClose()
        

    }
    return (
        // Modal elements
        <div id="myModal" className="modal">

            <div className="modal-header">
                <span className="close" onClick={props.onClose}>&times;</span>
                <h3>{isEdit[0] ? 'Edit A Item' : 'Add A New Item'}</h3>
            </div>
            {/* Form element */}
            <div className="modal-content">
                <form action="" id="myForm" onSubmit={onFormSubmit}>
                    <div>
                        <label for="">Title</label>
                        <input type="text" placeholder="Enter Title" name="title" required defaultValue={isEdit[0] ? currData.title : ''} />
                    </div>
                    <div>
                        <label for="">Description</label>
                        <input type="text" placeholder="Enter Description" name="description" required defaultValue={isEdit[0] ? currData.description : ''}/>
                    </div>
                    <div>
                        <label for="">Date</label>
                        <input type="date" name="date" required defaultValue={isEdit[0] ? currData.date : ''}/>
                    </div>
                    <div>
                        <label for="">Time</label>
                        <input type="time" name="time" required defaultValue={isEdit[0] ? currData.time : ''}/>
                    </div>
                    <div className="btn-section">
                        <input type="button" value="Close" className="clear_btn" onClick={props.onClose} />
                        <input type="submit" value={isEdit[0] ? 'Edit Item' : 'Add Item'} className="add_item" />
                    </div>
                </form>
            </div>

        </div>
    )
    
}

export default Modal;