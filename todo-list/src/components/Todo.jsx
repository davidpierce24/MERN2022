const Todo = props => {
    const {item, i, removeItem, finish} = props;

    const crossOut = {
        textDecoration: "line-through",
        cursor: "pointer", 
        marginRight: "10px"
    }
    
    const blank = {
        cursor: "pointer",
        marginRight: "10px"
    }

    return(
        <div key={ i } style={{display:"flex", justifyContent:"center", padding:"5px"}}>
            <li  style={item.todo ? blank : crossOut } onClick={e => finish(i)}> { item.item } </li>
            <input type="checkbox" onChange={e => finish(i)} checked={!item.todo} style={{marginRight:"10px"}}/>
            <button onClick={e => removeItem(i)} style={{marginRight:"10px", backgroundColor:"fuchsia"}} >Remove</button>
        </div>
    );
}

export default Todo;