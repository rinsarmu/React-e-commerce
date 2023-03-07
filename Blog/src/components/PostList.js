import React, { Component } from 'react'
import {connect} from 'react-redux'
import {fetchPosts} from '../actions'
class PostList extends Component{
    componentDidMount(){
        this.props.fetchPosts()
    }

    renderList=()=>{
        console.log('ddd')
        console.log(this.props)
        return this.props.posts.map(post=>{
            return (
                <div className='item' key ={post.id}>
                    <i className='large middle aligned icon user'/>
                    <div className="content">
                        <div className="description">
                            <h2>{post.title}</h2>
                            <p>{post.body}</p>
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