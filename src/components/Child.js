


const Child = (props) => {
  
    return ( 
        <div>
             {/* <button onClick={()=> props.clickHandler('koko')}>click me</button> */}
                  <button onClick={props.clickHandler}>click me</button>
        </div>
     );
}
 
export default Child;