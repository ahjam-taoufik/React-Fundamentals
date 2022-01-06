
import { Component } from "react";

class Message extends Component {
       constructor(){
           super();
             this.state={
                 message1:`welcome, we have `,
                 message2:`Subscribers`,
                 count:0
             }
       }

      funcHandler() {    
                this.setState((preState)=>({ count:preState.count+1}) )
               
        }

     increment(){
         this.funcHandler()
         this.funcHandler()
         this.funcHandler()
     }



    render(){
       
        return <div>
                   <h3>{this.state.message1}{this.state.count} {this.state.message2}</h3>
                   {/* <h1>{this.state.count}</h1> */}
                   <button onClick={()=>this.increment()}>click me</button>
              </div>
    }
}

export default Message;