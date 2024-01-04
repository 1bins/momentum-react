import React, { useEffect, useReducer, useState, useMemo, useRef, useCallback } from 'react';
import './App.css';
import './normalize.css'

import Login from "./pages/Login"
import Home from "./pages/Home"

const reducer = (state, action) => {
  let newState = [];
  switch(action.type){
    case "INIT": {
      return action.data;
    }
    case "CREATE": {
      newState = [action.data, ...state];
      break;
    }
    case "REMOVE": {
      newState = state.filter(elem => elem.id !== action.targetId);
      break;
    }
    case "CHECK": {
      newState = state.map(elem => elem.id === action.targetId ? {...elem, isChecked: action.chkType} : elem);
      break;
    }
    default: 
      return state;
  }
  localStorage.setItem("todoList", JSON.stringify(newState));
  return newState;
}

export const ToDoStateContext = React.createContext();
export const ToDoDispatchContext = React.createContext();

const dummyData = [
  {
    id: 1,
    content: "오늘의 할일1",
    isChecked: false
  },
  {
    id: 2,
    content: "오늘의 할일2",
    isChecked: false
  },
  {
    id: 3,
    content: "오늘의 할일3",
    isChecked: false
  }
];

function App() {
  const [data, dispatch] = useReducer(reducer, []);
  const dataId = useRef(0);
        
  // 배경 이미지 업데이트
  const randomItem = useMemo(() => {
    return parseInt(Math.random() * 5 + 1);
  }, []);

  // 로그인 확인
  const [isLogin, setIsLogin] = useState(false);
  useEffect(() => {
    const getName = localStorage.getItem("userName");
    if(getName){
      setIsLogin(!isLogin);
    }
  },[]);

  // INIT
  useEffect(() => {
    const localData = localStorage.getItem("todoList");
      if(localData){
        const todoList = JSON.parse(localData).sort((a, b) => parseInt(b.id) - parseInt(a.id));
        if(todoList.length >= 1){
          dataId.current = parseInt(todoList[0].id) + 1;
          dispatch({type: "INIT", data: todoList});
        }
      }
  }, []);

  // onCreate
  const onCreate = useCallback((content) => {
    dispatch({type: "CREATE", data: {
      id: dataId.current,
      content,
      isChecked: false
    }});
    dataId.current += 1;
  }, []);

  // onRemove
  const onRemove = useCallback((targetId) => {
    dispatch({type: "REMOVE", targetId})
  }, []);

  // onChkControl
  const onChkControl = useCallback((targetId, chkType) => {
    dispatch({type: "CHECK", targetId, chkType})
  }, []);

  const memoizedDispatches = useMemo(() => {
    return {onCreate, onRemove, onChkControl}
  },[]);

  return (
    <ToDoStateContext.Provider value={data}>
      <ToDoDispatchContext.Provider value={memoizedDispatches}>
        <main id="main" className={isLogin ? "accept" : ""}>
          <Login isLogin={isLogin} setIsLogin={setIsLogin}></Login>
          {isLogin && <Home setIsLogin={setIsLogin}></Home>}
          <div id="bg-area">
              <img src={`${process.env.PUBLIC_URL}/image/background_image${randomItem}.jpg`} alt="배경 이미지"/>
          </div>
        </main>
      </ToDoDispatchContext.Provider>
    </ToDoStateContext.Provider>
  );
}

export default App;