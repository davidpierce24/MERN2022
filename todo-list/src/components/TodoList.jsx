import { useState } from "react";

const TodoList = props => {
    const [list, setList] = useState([]);
    
    const handleSubmit = (e) => {
        e.preventDefault();
        let newList = [...list, e.target[0].value]
        setList(newList);
    }

    return (
        <div>
            <h1>Todo List</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="item">Add an Item to your Todo List </label> <br />
                <input type="text" />
                <input type="submit" value="Add to Todo List" />
            </form>
            <ul>
                {
                    list.map( (item, i) => 
                    <li key={ i }> { item } </li>
                    )
                }
            </ul>
        </div>
    )
}

export default TodoList;