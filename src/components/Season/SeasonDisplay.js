import React from 'react'
import './SeasonDisplay.css'

const seasonConfig= {
    summer:{
        text: 'Lets hit the beach',
        iconName: 'sun'

    },
    winter: {
        text: 'Burr, it is cold',
        iconName: 'snowflake'

    }

}

const getSeason =(lat, month)=>{
    if(month > 2 && month < 9){
        return lat > 0 ? 'summer' : 'winter'
    } else {
        return lat > 0? 'winter' : 'summer'
    }
}

const SeasonDisplay = (props) => {
    const season = getSeason(props.lat, new Date().getMonth())
    const {text, iconName} = seasonConfig[season]
    //   const text = season === 'Winter'? 'Burr, It is chill' : "Let's hit the beach"

    //   const icon = season === 'Winter'? 'snowflake' : 'sun'
  return (
    <div className={`SeasonDisplay ${season}`}>
        <div className='card-content'>
        <i className={`icon-left ${iconName} massive icon`}></i>
        <h1>{text}</h1>
        <i className={` icon-right ${iconName} massive icon`}></i>
        </div>
       
    </div>
  )
}

export default SeasonDisplay
