
import axios from '../axios'
export const fetchPosts =()=>async (dispatch, getState)=>{
        const promise = await axios.get('/posts')
         dispatch({type: 'FETCH_POSTS', payload: promise.data})
    }


export const selectPost =()=>{
    return {
        type: "SELECT_POST"
    }
}