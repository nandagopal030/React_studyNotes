import React, { useState, useEffect } from 'react'
import axios from 'axios'

function DataFetchingOne() {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [post, setPost] = useState({});
    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/posts/1")
            .then(response => {
                setLoading(false);
                setPost(response.data)
                setError('')

            })
            .catch(error => {
                setError('someThing went wrong')
                setLoading(false)
                setPost({})
            })
    }, [])
    return (
        <div>

        </div>
    )
}

export default DataFetchingOne