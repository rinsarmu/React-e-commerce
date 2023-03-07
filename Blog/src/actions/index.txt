//action creater
import React from 'react'

export const selectSong =(song)=>{
    return{
        type:'SONG_SELECTED',
        payload:song
    }
}

export const increment =(x)=>{
    return{
        type: "INC",
        payload:x
    }
}

export const decrement =(x)=>{
    return{
        type: "DEC",
        payload:x
    }
}

