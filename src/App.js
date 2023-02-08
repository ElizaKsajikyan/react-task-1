import {Routes, Route,Link} from 'react-router-dom'
import './App.css';
import Posts from "./Posts/Posts";
import Home from "./Home/Home";
import Post from "./Post/Post";

function App() {
    return (
        <>
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/posts'>Posts</Link></li>
            </ul>
            <Routes>
                <Route path={'/'}  element={<Home/>} />
                <Route path={'/posts'} element={<Posts/>}>
                    <Route path=':id'  element={<Post/>} location='/posts' />
                </Route>
            </Routes>
        </>
    );
}

export default App;
