import React from 'react'

const Loader = ()=>{
    return(
        <div class="ui segment" style={{width:'100%', height:"100%"}}>
        <div class="ui active inverted dimmer">
          <div class="ui text loader">Loading</div>
        </div>
        <p></p>
      </div>
    )
}

export default Loader;