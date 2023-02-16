import './Header.css'
import {Link} from "react-router-dom";
import {useContext, useEffect} from "react";
import ThemeContext,{Themes} from "../Context";

function Header(){
    const {theme,changeTheme} =useContext(ThemeContext);

    function setTheme(){
        const newTheme= Themes[theme]
        for(let color in  newTheme){
            document.body.style.setProperty(`--${color}`, newTheme[color])
        }
    }
    useEffect(()=>{
        setTheme(theme)
    },[theme])
    return(
        <header className='header'  style={{'--color': "red"}}>
            <ul className='menu'>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/posts'>Posts</Link></li>
                <li><Link to='/toDo'>To do list</Link></li>
                <li>
                    <label className='check-theme'>
                        Theme mode
                    <input type="checkbox" onChange={({target})=>{
                        changeTheme(target.checked)
                    }}/>
                    </label>
                </li>
            </ul>
        </header>
    )
}

export default Header