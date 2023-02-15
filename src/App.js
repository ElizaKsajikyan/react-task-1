import {Routes, Route} from 'react-router-dom'
import React, { useState} from 'react'
import './App.css';
import ThemeContext from "./Context";
import Posts from "./Posts/Posts";
import Home from "./Home/Home";
import Post from "./Post/Post";
import ToDO from "./ToDo/ToDo";
import Header from "./Header/Header";

function App() {
    const [theme, setTheme] = useState('light')

    function changeTheme(val) {
        val ? setTheme('dark') : setTheme('light');
    }

    return (
        <>
            <ThemeContext.Provider value={theme}>
                <Header changeTheme={changeTheme}/>
                <Routes>
                    <Route path={'/'} element={<Home/>}/>
                    <Route path={'/posts'} element={<Posts/>}>
                        <Route path=':id' element={<Post/>} location='/posts'/>
                    </Route>
                    <Route path={'/toDo'} element={<ToDO/>}/>
                </Routes>
            </ThemeContext.Provider>
        </>
    );
}

export default App;
