import React from 'react'
import { connect } from 'react-redux'
import axios from '../axios'

import {selectSong} from '../actions'

import Increment from './Increment'


class SongList extends React.Component {

    renderList=()=>{
        return this.props.songs.map(_song =>{
            return(
                <div className='item' key={_song.title}>
                    <div className='right floated content'>
                        <button 
                            className='ui button primary'
                            onClick={()=>this.props.selectSong(_song)}
                        >
                             Select
                        </button>
                    </div>
                    <div className='content'>
                      <h3>{_song.title}</h3>  

                    </div>
                </div>
            )
        }) 
    }
    render(){
        console.log(this.props)
        return(
            <div className='ui divided list'>
               {this.renderList()}
        
            </div>
        )
    }
}

const mapStateToProps = (state)=>{
    console.log(state)
    return {
        songs: state.songs
    }
}

export default SongList
  
//1000148531262