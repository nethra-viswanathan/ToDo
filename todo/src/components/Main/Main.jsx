import '../../dist/main.css';
import Header from '../Header/Header'
import Addnew from '../Addnew/Addnew'
import Modal from '../Modal/Modal'
import Todo from '../TodoList/TodoList'

const Main = () => {
    // Main parent component
    return(
        <div>
            <div class="main-container">
                <div class="container">
                    {/* Adding Header component */}
                    <Header />
                    
                    <div class="list-parent" id="appendList">
                        {/* Showing Todo list */}
                        <Todo />
                    </div>
                    {/* Adding a new item */}
                    <Addnew />
                    
                </div>
            </div>
            
        </div>
    )
}

export default Main;