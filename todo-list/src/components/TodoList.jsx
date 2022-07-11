import { useState, useEffect } from "react";

import Todo from "./Todo";

const TodoList = props => {
    const [item, setItem] = useState("");
    const [list, setList] = useState([]);

    
    
    
    
    const handleSubmit = (e) => {
        e.preventDefault();
        // let newList = [...list, {item: e.target[0].value, todo: true, id: list.length+1}]
        let newList = [...list, {item: item, todo: true, id: list.length+1}]
        setList(newList);
        setItem("");
        
        store();
        
    }
    
    
    const store = () => localStorage.setItem("list", JSON.stringify(list))
    
    
    const finish = (idx) => {
        const filtered = list.map((item, i) => i === idx ? {...item, todo: !item.todo} : {...item});
        setList(filtered);
        store();
    }
    
    const removeItem = idx => {
        const removed = list.filter((item, i) =>{ return i !== idx })
        setList(removed);
        store();
    }
    
    useEffect(() => {
        const saved = JSON.parse(localStorage.getItem("list"))
        if(saved) {
            setList(saved)
        }
    }, [setList])
    
    // useEffect(() => {
    //         localStorage.setItem("list", JSON.stringify(list))
    //     }, [list])

    return (
        <div>
            <h1>ToDo List</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="item">Add an Item to your Todo List </label> <br />
                <input type="text" onChange={ e => setItem(e.target.value) } value={ item } />
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