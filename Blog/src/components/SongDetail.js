import React from 'react'
import {connect} from 'react-redux'
import Increment from './Increment'

const SongDetail = ({song})=>{
    if(!song) return <div> Please select a song</div>
    return(
        <div >
            <h3>Details for : </h3>
            <p>
                <strong>Title : </strong> {song.title}
                <br />
                <strong>Duration : </strong> {song.duration}
            </p>
            <div>
                <Increment />
            </div>
         
           
        </div>
    )
}


const mapStateToProps = (state)=>{
    return {
        song: state.selectedSong // selectedSong should be match with the key in the reducers
    }
}

export default SongDetail