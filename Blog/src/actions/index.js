
import axios from '../axios'
export const fetchPosts =()=>async (dispatch, getState)=>{
        const promise = await axios.get('/posts')
         dispatch({type: 'FETCH_POSTS', payload: promise.data})
    }


    export const fetchUser =(id)=>async (dispatch, getState)=>{
        const promise = await axios.get(`/users/${id}`)
         dispatch({type: 'FETCH_USER', payload: promise.data})
    }