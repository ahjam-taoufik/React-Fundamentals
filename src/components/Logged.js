
import React, { Component } from 'react'


export default class Logged extends Component {
           constructor(){
               super()
              this.state={
                  isLogged:true
              }
           }

handlerLog=()=>{
    this.setState({
        isLogged:!this.state.isLogged
    })
}



    render() {
           return <div>
                     {this.state.isLogged?<div>your are Sign In ...</div>:<div>your are Sign Out ...</div>}
                     <button onClick={this.handlerLog}>sign {this.state.isLogged?'out':'in'}</button>
                 </div> 
           
            
    }
}
