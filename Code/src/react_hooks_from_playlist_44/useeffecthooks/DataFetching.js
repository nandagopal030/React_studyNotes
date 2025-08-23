import { useState, useEffect } from 'react'
import axios from 'axios'
function DataFetching() {
    const [posts, setPosts] = useState([]);
    const [postId, setPostId] = useState('posts')
    useEffect(() => {
        axios
            .get(`https://jsonplaceholder.typicode.com/${postId}`)
            .then(res => {
                console.log(res)
                setPosts(res.data)
            })
            .catch(err => { console.log(err) })
    }, [postId])
    const handlePostId = () => {
        setPostId("comments");
    }
    return (
        <div>
            <button onClick={handlePostId}> click to chnage comments view</button>
            <ul>
                {
                    posts.map(post => (
                        <li key={post.id || post.postId}>{post.body}</li>
                    ))}
            </ul>

        </div>
    )
}

export default DataFetching
