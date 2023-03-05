import React from 'react'
import SeasonDisplay from './SeasonDisplay'

// const AppSeason = () => {
//     window.navigator.geolocation.getCurrentPosition((position)=>console.log(position), err=>console.log(err))
//   return (
//     <div>
//       sdddddddd
//       <SeasonDisplay />
//     </div>
//   )
// }

class AppSeason extends React.Component{
    constructor(){
        super()

        this.state ={
            latitude: null,
            errorMessage: null
        }

    }

    //Called once in time. SO I should place all loading state for the first time here
    componentDidMount(){
        window.navigator.geolocation.getCurrentPosition(
            position=>
                this.setState({latitude: position.coords.latitude}),
             err=>this.setState({errorMessage: err.message})
        )
    }
  
    render(){
      

        return(
            <div>
                {this.state.latitude && !this.state.errorMessage
                ?  <p>  Location {this.state.latitude}</p>
                : !this.state.latitude && this.state.errorMessage
                    ?   <p>  Error {this.state.errorMessage}</p>
                    :  <p>  Loading ...</p>
            }
              
            </div>
        )
    }
}

export default AppSeason
