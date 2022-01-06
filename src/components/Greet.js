import React from "react";



class Greet extends React.Component {

  clickHandler(){
    console.log('click from React Class');
  }

  render(){
              return <div>
                          <button onClick={this.clickHandler}>Class click me</button>
                    </div>  
            }
}
export default Greet;
