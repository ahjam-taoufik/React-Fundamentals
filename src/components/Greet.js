import React from "react";


// ================First Methode===========================================
// class Greet extends React.Component {
//          constructor(){
//            super()
//            this.state={
//              message:'fisrt message'
//            }
//          }
//   clickHandler(){
//     this.setState({
//       message:'last Message'
//     })
//   }
//   render(){
//           return <div>
//                      <h1>{this.state.message}</h1>
//                   <button onClick={this.clickHandler.bind(this)}>click me</button>
//                 </div>  
//             }
// }
// export default Greet;


//  ================Second Methode===========================================
// class Greet extends React.Component {
//          constructor(){
//            super()
//            this.state={
//              message:'fisrt message'
//            }
//          }
//   clickHandler(){
//     this.setState({
//       message:'last Message'
//     })
//   }
//   render(){
//           return <div>
//                      <h1>{this.state.message}</h1>
//                   <button onClick={()=>this.clickHandler()}>click me</button>
//                 </div>  
//             }
// }
// export default Greet;



 //  ================thirth Methode===========================================
// class Greet extends React.Component {
//          constructor(){
//            super()
//            this.state={
//              message:'fisrt message'
//            }
//            this.clickHandler=this.clickHandler.bind(this)
//          }
//   clickHandler(){
//     this.setState({
//       message:'last Message'
//     })
//   }

//   render(){
//           return <div>
//                      <h1>{this.state.message}</h1>
//                   <button onClick={this.clickHandler}>click me</button>
//                 </div>  
//             }
// }
// export default Greet;



//  ================fourth Methode===========================================
class Greet extends React.Component {
         constructor(){
           super()
           this.state={
             message:'fisrt message'
           }
         
         }
  clickHandler=()=>{
    this.setState({
      message:'last Message'
    })
  }

  render(){
          return <div>
                     <h1>{this.state.message}</h1>
                  <button onClick={this.clickHandler}>click me</button>
                </div>  
            }
}
export default Greet;





























