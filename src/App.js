import {Routes, Route} from 'react-router-dom'
import React, {useEffect, useState} from 'react'
import './App.css';
import ThemeContext from "./Context";
import Posts from "./Posts/Posts";
import Home from "./Home/Home";
import Post from "./Post/Post";
import ToDO from "./ToDo/ToDo";
import Header from "./Header/Header";

const themes = {
    light: {
        background: "#343434",
        textColor: "#eeeeee"
    },
    dark: {
        background: "#ffffff",
        textColor: "#222222"
    }
};

function App() {
    const [theme, setTheme] = useState(themes.light)

    function changeTheme(val) {
        val ? setTheme(themes.dark) : setTheme(themes.light);
        console.log(theme);
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
