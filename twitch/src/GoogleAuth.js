import React, { Component } from 'react'

export default class GoogleAuth extends Component {
    componentDidMount(){
        window.gapi.load('client:auth2', ()=>{
            window.gapi.client.init({
                clientId:'291327397594-h0h8p8lbo6k9i177bbcrs5dm5a9be4hf.apps.googleusercontent.com',
                scope:'email'

            })
        })
    }
  render() {
    return (
      <div>
        Google Auth
      </div>
    )
  }
}
