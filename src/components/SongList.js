import React from 'react'
import { connect } from 'react-redux'


class SongList extends React.Component {
    render(){
        return(
            <div>
                Song lIst
            </div>
        )
    }
}

export default connect()(SongList)
