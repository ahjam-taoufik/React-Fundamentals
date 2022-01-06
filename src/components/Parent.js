import React from "react";
import Child from "./Child";



class Parent extends React.Component {
          constructor(){
            super()
            this.state={
              message:'First '
            }
          }



  clickHandler=(a)=>{
        this.setState({
            message:'Last ' 
        })
        //alert(`heloo ${a}`)
      
  }



  render(){
          return <div>
                       <h1>{this.state.message}</h1> 
                       <Child clickHandler={this.clickHandler} />
                </div>  
            }
}
export default Parent;





























