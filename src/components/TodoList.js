import React, { useContext, useRef, useState } from "react";
import HeaderArea from "./HeaderArea"

import { ToDoDispatchContext, ToDoStateContext } from "../App";
import TodoItem from "./TodoItem";

const TodoList = ({todoHide, setTodoHide}) => {
    const toDoList = useContext(ToDoStateContext);
    const { onCreate } = useContext(ToDoDispatchContext);
    const [content, setContent] = useState("");
    const contChk = useRef();
    const getName = localStorage.getItem("userName");

    const handleSubmit = () => {
        if(window.event.keyCode==13){
            if(content.length < 1){
                contChk.current.focus();
                return;
            }
            onCreate(content);
            setContent("");
        }
    }

    return(
        <div id="todo-list" className={["popup", todoHide && "hidden"].join(" ")}>
            <HeaderArea onClick={setTodoHide}></HeaderArea>
            <div className="popup-cont-area">
                <p className="greet"><span id="userName">{getName}</span>님, 안녕하세요!</p>
                <div id="todo-form">
                    <input
                        ref={contChk}
                        type="text"
                        placeholder="오늘의 할 일은 무엇인가요?"
                        value={content}
                        onChange={e => setContent(e.target.value)}
                        onKeyUp={handleSubmit}
                    />
                </div>
                <ul id="todo-ul">
                    {toDoList.map(elem => <TodoItem key={elem.id} {...elem}></TodoItem>)}
                </ul>
            </div>
        </div>
    )
}

export default React.memo(TodoList);