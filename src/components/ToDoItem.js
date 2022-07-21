import "./ToDoItem.css"

//Input box for our text
//Save button
//Cancel button

function ToDoItem(props) {
    const editMode = (
    <div className="view-mode">
        <input type="checkbox" defaultChecked={props.completed}/>
        <input type="text" />
        <div className="buttons">
            <button>Save</button>
            <button>Cancel</button>
        </div>
    </div>
    )

    const viewMode = (<div className="view-mode">
        <input type="checkbox" defaultChecked={props.completed}/>
        <span>{props.toDoItem}</span>
        <div className="buttons">
        <button onClick={ () => props.editItem(props.id) }>Edit</button>
        <button onClick={ () => props.deleteItem(props.id) }>Remove</button>
    </div>
</div>)
    
    return(
        <li>
            { props.editting ? editMode : viewMode } 
        </li>

    )

}


export default ToDoItem