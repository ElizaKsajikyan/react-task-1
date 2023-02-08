import {useParams} from 'react-router-dom'
import {useCallback, useDebugValue, useEffect, useLayoutEffect, useMemo, useReducer, useState} from "react";

import './Post.css'

// class Posttt extends React.Component{
//     componentDidMount() { // useEffect witout depeth list
//     }
//     componentDidUpdate(prevProps, prevState, snapshot) { // useEffect depth list
//     }
//     componentWillUnmount() {
//         // useEffect(() => {
//         //     fetchApi();
//         //     return () => {
//         //         console.log('unmount') //destroy
//         //     }
//         // },[])
//     }
// }
function Post() {
    const {id} = useParams();
    let [post, setPost] = useState([])
    const fetchApi = ()=>{
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(response => response.json())
            .then(json => setPost(json))
    }
    // useLayoutEffect(() => {
    //
    // },[])
    useEffect(() => {
        fetchApi();
        return () => {
            console.log('unmount') //destroy
        }
    },[id])
    // console.log(post)
    // useMemo()
    // useCallback()
    // useReducer()
    // useDebugValue()
    // use
    useEffect(() => {
        console.log(post)
        // return () =>  {
        //     console.log('unmount') // dependency change
        // }
    },[post])
    return (
        <div className='post-item'>
             <h1>{post.title}</h1>
            <p>{post.body}</p>
        </div>
    )
}

export default Post