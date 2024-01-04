import React, { useContext } from "react";
import { ToDoDispatchContext } from "../App";

const TodoItem = ({ id, content, isChecked }) => {
    const { onRemove, onChkControl } = useContext(ToDoDispatchContext);

    return(
        <li>
            <input
                type="checkbox"
                id={`todo${id}`}
                onChange={e => onChkControl(id, e.target.checked)}
                checked={isChecked}
            />
            <label htmlFor={`todo${id}`}></label>
            <p>{content}</p>
            <button onClick={() => onRemove(id)}>🗑️</button>
        </li>
    )
}

export default React.memo(TodoItem);