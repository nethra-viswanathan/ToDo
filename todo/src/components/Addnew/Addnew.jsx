import { useState } from "react";
import Modal from '../Modal/Modal'
import React from "react";
const Addnew = () => {
    //show/hide add modal
    const [show,setShow] = useState(false);
    return(
        <React.Fragment>
        <div class="add-container">
            <button id="myBtn" onClick={() => {
                setShow(true);
            }}> + Add a New Item</button>
           
        </div>
        {/* Add Pop-UP */}
        <Modal show={show} onClose = {() => setShow(false)} edit={false} id={0}/>
        </React.Fragment>
        
    )
}

export default Addnew ;
