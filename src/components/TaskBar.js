import React from "react";
import Clock from "./Clock";

const TaskBar = ({ setIsLogin, todoHide, setTodoHide, weatherHide, setWeatherHide, quoteHide, setQuoteHide }) => {
    const handleLogout = () => {
        if(window.confirm("데이터가 전부 초기화 됩니다.\n로그아웃 하시겠습니까?")){
            setIsLogin(false);
            localStorage.removeItem("userName");
            localStorage.removeItem("todoList");
            window.location.reload();
        }
    }

    return(
        <div id="task-bar">
            <ul className="icons-list">
                <li><button type="button" className={todoHide ? "fill" : ""} onClick={() => setTodoHide(!todoHide)}><img src="/image/taskBar_todo_icon.png" alt="할일 목록 이미지" /></button></li>
                <li><button type="button" className={weatherHide ? "fill" : ""} onClick={() => setWeatherHide(!weatherHide)}><img src="/image/taskBar_weather_icon.png" alt="날씨 이미지" /></button></li>
                <li><button type="button" className={quoteHide ? "fill" : ""} onClick={() => setQuoteHide(!quoteHide)}><img src="/image/taskBar_quote_icon.png" alt="명언 이미지" /></button></li>
                <li><button type="button" id="logout" onClick={handleLogout}><img src="/image/taskBar_logout_icon.png" alt="로그아웃 이미지" /></button></li>
            </ul>
            <Clock></Clock>
        </div>
    );
}

export default React.memo(TaskBar);