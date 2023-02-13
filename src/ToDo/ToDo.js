import './ToDo.css'
import {useEffect, useReducer} from "react";

let initialTodos = [];

const reducer = (state, action) => {
    switch (action.type) {
        case "COMPLETE":
            return state.map((todo) => {
                if (todo.id === action.id) {
                    return { ...todo, completed: !todo.completed };
                } else {
                    return todo;
                }
            });
        case "FETCH": return action.payload;
        default:
            return state;
    }
};

function ToDO() {
    let [state, dispatch] = useReducer(reducer, initialTodos)

    const fetchApi = ()=>{
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(response => response.json())
            .then(json => {
                dispatch({type:'FETCH',payload:json})
            })
    }

    useEffect(()=>{
        fetchApi()
    },[])

    return (
        <ul>
            {state && state.length > 0 && state.map((toDo, index) => (
                <li key={toDo.id} className='to-do-item'>
                    <input type="checkbox" checked={toDo.completed} onChange={() => {
                        dispatch({ type: "COMPLETE", id: toDo.id });
                    }
                    }/>
                    <span style={{textDecoration: toDo.completed? 'line-through':null}}>{toDo.title}</span>
                </li>
            ))}
        </ul>
    )
}

export default ToDO