import React, { Component } from 'react'
import {connect} from'react-redux'

import {fetchUser} from '../actions'

class UserHeader extends Component {
    componentDidMount(){
        this.props.fetchUser(this.props.id)
    }
  render() {
    const user = this.props.user.find(user=>user.id === this.props.id)
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

const mapToStateProps = (state)=>{
    // console.log(state)
    return {
        user: state.user
    }
}
export default connect(mapToStateProps, {fetchUser})(UserHeader)
