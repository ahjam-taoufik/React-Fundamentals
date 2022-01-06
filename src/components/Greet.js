import React from "react";



class Greet extends React.Component {
  render(){
      
     // console.log(this.props);
              return <div>
                         <h1>Salam  {this.props.name} </h1>
                         {this.props.children}
                    </div>  
            }
}
export default Greet;
