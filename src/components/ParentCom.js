


import React, { Component } from 'react'
import MemoComp from './MemoComp'

export default class ParentCom extends Component {
      constructor(props) {
          super(props)
      
          this.state = {
               name:'salam'
          }
      }
      
componentDidMount(){
    setInterval(() => {
         this.setState({
             name:this.state.name
         })
    }, 1000);
}

    render() {
        return (
            <div>
               <MemoComp name={this.state.name}  />
            </div>
        )
    }
}


