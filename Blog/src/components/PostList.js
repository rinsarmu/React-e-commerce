import React, { Component } from 'react'
import {connect} from 'react-redux'
import {fetchPosts} from '../actions'
import UserHeader from './UserHeader'
class PostList extends Component{
    componentDidMount(){
        this.props.fetchPosts()
    }

    renderList=()=>{
        console.log('ddd')
        // console.log(this.props)
        const data = {...this.props.posts.splice(0,5)}
        console.log(data)
        return this.props.posts.splice(0,5).map(post=>{
            return (
                <div className='item' key ={post.id}>
                    <i className='large middle aligned icon user'/>
                    <div className="content">
                        <div className="description">
                            <h2>{post.title}</h2>
                            <p>{post.body}</p>
                            <UserHeader id={post.userId}/>
                        </div>
                    </div>
                </div>
            )
        })

    }
    render(){
        // console.log(this.props.posts)
        console.log(this.props.posts.data)
        return(
         <div className='ui relaxed divided list'>
        { this.renderList()}
            </div>
        )
    }
}

const mapToStateProps =(state)=>{
    // console.log(state)
    return{posts: state.posts}
}

export default connect(mapToStateProps, {fetchPosts})(PostList)