import React from "react";



class Greet extends React.Component {
  render(){
      const{FName,LName,children}=this.props
      console.log(FName);
     // console.log(this.props);
              return <div>
                         <h1>Salam  {FName} {LName} </h1>
                         {children}
                    </div>  
            }
}
export default Greet;
