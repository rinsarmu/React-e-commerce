
import axios from '../axios'
import _ from 'lodash'
export const fetchPosts =()=>async (dispatch, getState)=>{
        const promise = await axios.get('/posts')
         dispatch({type: 'FETCH_POSTS', payload: promise.data})
    }

// export const fetchPosts =_.memoize(function(){return async function (dispatch, getState){{
//      const promise = await axios.get('/posts')

//       dispatch({type: 'FETCH_POSTS', payload: promise.data})
//  }
// }
// })



export const fetchUser =(id)=> (dispatch)=>{ _fetchUser(id, dispatch)}

const _fetchUser= _.memoize(async(id, dispatch)=>{
     const promise = await axios.get(`/users/${id}`)
     dispatch({type: 'FETCH_USER', payload: promise.data})

})

// export const fetchUser = function(id){
//      return async function (dispatch, getState){
//           const promise = await axios.get(`/users/${id}`)
//           dispatch({type: 'FETCH_USER', payload: promise.data})
// }
// }

