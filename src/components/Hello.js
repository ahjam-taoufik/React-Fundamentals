import React from "react";



// const Hello = (props) => {
//     const{ FName,LName}=props
//     return ( 
//            <div>
//              <h1>Hello {FName} {LName}</h1>
//          
//            </div>
//      );}

const Hello = ({ FName,LName, children}) => {
    
    return ( 
           <div>
             <h1>Hello {FName} {LName}</h1>
                  {children}
           </div>
     );}






 
export default Hello;