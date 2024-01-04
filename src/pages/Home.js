import React, { useState } from "react";

import TodoList from "../components/TodoList";
import TaskBar from "../components/TaskBar";
import Quote from "../components/Quote";
import Weather from "../components/Weather";

const Home = ({setIsLogin}) => {
    const [todoHide, setTodoHide] = useState(false);
    const [weatherHide, setWeatherHide] = useState(false);
    const [quoteHide, setQuoteHide] = useState(false);
    
    return(
        <div id="login-accept">
            <div className="main-inner">
                <TodoList todoHide={todoHide} setTodoHide={setTodoHide}></TodoList>
                <Weather weatherHide={weatherHide} setWeatherHide={setWeatherHide}></Weather>
                <Quote quoteHide={quoteHide} setQuoteHide={setQuoteHide}></Quote>
                <TaskBar setIsLogin={setIsLogin} todoHide={todoHide} setTodoHide={setTodoHide} weatherHide={weatherHide} setWeatherHide={setWeatherHide} quoteHide={quoteHide} setQuoteHide={setQuoteHide}></TaskBar>
            </div>
        </div>
    )
}

export default Home;