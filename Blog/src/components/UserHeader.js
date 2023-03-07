import React, { Component } from 'react'
import {connect} from'react-redux'

// import {fetchUser} from '../actions'

class UserHeader extends Component {
    // componentDidMount(){
    //     this.props.fetchUser(this.props.id)
    // }
  render() {
    const {user} = this.props
    if(!user){
        return null
    }
    // console.log(user)
    return (
      <div className='header'>
         {user.name} 
      </div>
    )
  }
}

const mapToStateProps = (state, ownProps)=>{
    // console.log(state)
    return {
        user: state.user.find(user=>user.id === ownProps.id)
    }
}
export default connect(mapToStateProps)(UserHeader)
