import React from "react";



const Hello = () => {

    
   function clickHandler(){
        console.log('click from React function ');
   }

    return ( 
           <div>
                <button onClick={clickHandler}>Function click me</button>
           </div>
     );}

 
export default Hello;