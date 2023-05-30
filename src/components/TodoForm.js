import { useState } from "react";

import { useDispatch } from "react-redux";

import { addNewTodo } from "../redux/actions";

// import Header from "./header";
// import Todos from "./Todos"




// const TodoForm = ({updateUser}) => {
    const TodoForm = () => {
    const [text, setText] = useState("");

    const dispatch = useDispatch();

    const onFormSubmit = (e) => {
        e.preventDefault();

        dispatch(addNewTodo(text));

        setText('');
    }

    const onInputChange = (e) => {
        setText(e.target.value);
    }

    return (
        <div>
      
        {/* <div className="button" onClick={() => updateUser({})} >Logout</div> */}
        {/* <Header /> */}
        <form className="form" onSubmit={onFormSubmit}>
            <input  
                placeholder="Enter new todo..."
                className="input"
                onChange={onInputChange}
                value={text}
            />
        </form>
        {/* <Todos /> */}
        </div>
    )
}

export default TodoForm;

