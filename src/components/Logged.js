
import React, { Component } from 'react'


export default class Logged extends Component {
           constructor(){
               super()
              this.state={
                  isLogged:true
              }
           }

    render() {

            // ======Fourth Methode=============
               return this.state.isLogged && <div>your are Sign In ...</div>
             // ======Thirth Methode=============
           // return this.state.isLogged?<div>your are Sign In ...</div>:<div>your are Sign Out ...</div>
            // ======Second Methode=============
            //   let message
            //       if (this.state.isLogged) {
            //           message=<div>your are Sign In ...</div>
            //       }
            //       if (!this.state.isLogged) {
            //         message=<div>your are Sign Out ...</div>
            //     }
            //     return message

             // ======First Methode=============
            // if (this.state.isLogged) {
            //    return <div>your are Sign In ...</div>  
            // }
            // if (!this.state.isLogged) {
            //    return <div>your are Sign Out ...</div>  
            // }
            
    }
}
