import axios from 'axios'
import React from 'react'
import { useReducer, useEffect } from 'react'

const initialState = {
    loading: true,
    error: '',
    post: {}
}
const reducer = (state, action) => {
    switch (action.type) {
        case "FETCH_SUCCESS":
            return {
                loading: false,
                error: '',
                post: action.payload,
            }
        case "FETCH_FAILURE":
            return {
                loading: false,
                error: 'Fetch failure error buddy',
                post: {}
            }
        default:
            return state;
    }
}
function DataFetchingTwo() {
    const [state, dispatch] = useReducer(reducer, initialState);
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts/1')
            .then(response =>
                dispatch({ type: 'FETCH_SUCCESS', payload: response.data })
            )
            .catch(error =>
                dispatch({ type: 'FETCH_FAILURE' })
            )
    }, [])
    return (
        <div>
            {state.loading ? 'loading' : state.post.title}
            {state.error ? state.error : null}
        </div>
    )
}

export default DataFetchingTwo