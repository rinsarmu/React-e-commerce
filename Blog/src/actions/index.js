
import axios from '../axios'
export const fetchPosts =()=>async (dispatch, getState)=>{
        const promise = await axios.get('/posts')
         dispatch({type: 'FETCH_POSTS', payload: promise})
    }


export const selectPost =()=>{
    return {
        type: "SELECT_POST"
    }
}