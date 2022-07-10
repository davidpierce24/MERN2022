import { useState, useEffect } from "react";

import Todo from "./Todo";

const TodoList = props => {
    const [list, setList] = useState([]);

    useEffect(() => {
        const saved = JSON.parse(localStorage.getItem("list"))
        if(saved) {
            setList(saved)
        }
    }, [setList])
    
    const handleSubmit = (e) => {
        e.preventDefault();
        let newList = [...list, {item: e.target[0].value, todo: true, id: list.length+1}]
        setList(newList);
        e.target[0].value = "";
        localStorage.setItem("list", JSON.stringify(list))
    }
    
    
    
    const finish = (idx) => {
        const filtered = list.map((item, i) => i === idx ? {...item, todo: !item.todo} : {...item});
        setList(filtered);
        localStorage.setItem("list", JSON.stringify(list))
    }
    
    const removeItem = idx => {
        const removed = list.filter((item, i) =>{ return i !== idx })
        setList(removed);
        localStorage.setItem("list", JSON.stringify(list))
    }


    return (
        <div>
            <h1>Todo List</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="item">Add an Item to your Todo List </label> <br />
                <input type="text" />
                <input type="submit" value="Add to Todo List" style={{backgroundColor:"cyan"}} />
            </form>

            
            <ul>
                {
                    list.map( (item, i) => 
                    <Todo item={item} i={i} removeItem={removeItem} finish={finish}/>
                    
                    )
                }
            </ul>
        </div>
    )
}

export default TodoList;