import {useEffect, useState} from "react";
import './Posts.css'
import {Link,Outlet} from "react-router-dom";
function Posts() {
    let [posts, setPosts] = useState([])
    const fetchApi = ()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(json => setPosts(json))
    }
    useEffect(() => {
        fetchApi();
    },[])
    return (
        <>
            <Outlet />
        <ul className='container'>
            {posts && posts.length > 0 && posts.map((post, index) => (
                <li key={post.id} className='card'>
                    <h2 className='card__title'>{post.title}</h2>
                    <Link to={`/posts/${post.id}`} className='card__link'>See more</Link>
                </li>
            ))}
        </ul>

        </>
    )
}

export default Posts