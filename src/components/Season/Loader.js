import React from 'react'

const Loader = (props)=>{
    return(
        <div class="ui segment" style={{width:'100%', height:"100%"}}>
        <div class="ui active  dimmer">
          <div class="ui text loader">{props.message}</div>
        </div>
        <p></p>
      </div>
    )
}

Loader.defaultProps = {
    message: 'Loading...'
}

export default Loader;