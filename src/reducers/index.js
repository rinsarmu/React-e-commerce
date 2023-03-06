import { combineReducers } from "redux"

const songsReducers = ()=>{
    return [
        {
            title: 'No scrubs', duration: "4:05"
        },
        {
            title: 'Macarena', duration: "02:30"
        },
        {
            title: 'The Beatles', duration: "02:30"
        },
        {
            title: 'I want i that way',duration: "1:45"
        }
    ]
    
}

const SelectedSongReducer =(selectedSong = null, action)=>{
    if(action.type === 'SONG_SELECTED'){
        return action.payload
    }

    return selectedSong

}

const Counter =(state=0, action)=>{
    if(action.type === 'INC'){
        return state + action.payload
    }

    if(action.type === 'DEC'){
        return state - action.payload
    }

    return state
}



export default combineReducers({
    songs: songsReducers,
    selectedSong: SelectedSongReducer,
    value: Counter,
})