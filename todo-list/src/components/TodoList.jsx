import { useState } from "react";

const TodoList = props => {
    const [list, setList] = useState([]);
    
    const handleSubmit = (e) => {
        e.preventDefault();
        let newList = [...list, {item: e.target[0].value, todo: true, id: list.length+1}]
        setList(newList);
        e.target[0].value = "";
    }

    const crossOut = {
        textDecoration: "line-through",
        cursor: "pointer", 
        marginRight: "10px"
    }
    
    const blank = {
        cursor: "pointer",
        marginRight: "10px"
    }

    let fresh

    const finish = (idx) => {
        const filtered = list.map((item, i) => i === idx ? {...item, todo: !item.todo} : {...item});
        setList(filtered);
    }

    const removeItem = idx => {
        const removed = list.filter((item, i) =>{ return i !== idx })
        setList(removed);
    }

    return (
        <div>
            <h1>Todo List</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="item">Add an Item to your Todo List </label> <br />
                <input type="text" />
                <input type="submit" value="Add to Todo List" />
            </form>
            <p>{fresh}</p>
            <ul>
                {
                    list.map( (item, i) => 
                    <div key={ i } style={{display:"flex", justifyContent:"center", padding:"5px"}}>
                        <li  style={item.todo ? blank : crossOut } onClick={e => finish(i)}> { item.item } </li>
                        <input type="checkbox" onClick={e => finish(i)} checked={!item.todo} style={{marginRight:"10px"}}/>
                        <button onClick={e => removeItem(i)} style={{marginRight:"10px"}} >Remove</button>
                    </div>
                    
                    )
                }
            </ul>
        </div>
    )
}

export default TodoList;