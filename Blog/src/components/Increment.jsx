import React from 'react'
import {connect} from 'react-redux'
import {increment} from '../actions'
import {decrement} from '../actions'


const Increment = (props)=>{
    console.log(props)
    return (
        <div>
            <button onClick ={()=>props.increment(1)}> ADD</button>
            <h1>Increment: {props.add}</h1>

            <button onClick={()=>props.decrement(1)}> DEC</button>
            <h1>Decrement: {props.sub}</h1>
        </div>
    )
}

const mapToStateProps=(state)=>{
    console.log("here")
    // console.log(state)
    console.log("end")
    return {sub: state.sub, add: state.add}
}

export default Increment