import React from "react";



// const Hello = (props) => {
//     // console.log(props);
//     return ( 
//            <div>
//              <h1>Hello {props.name}</h1>
//              {props.children}
//            </div>
//      );


const Hello = ({name,children}) => {
    return ( 
           <div>
             <h1>Hello {name}</h1>
             {children}
           </div>
     );
     
}
 
export default Hello;