import React, { Component } from "react";

export default class FromHandling extends Component {
  constructor(props) {
    super(props);
    this.state = {
      myText: '',
      skill:'Java'
    };
  }


  FromHandlingText = (e) => {
    this.setState({
      myText: e.target.value,
    });
  };

  FromHandlingSelect = (e) => {
    this.setState({
      skill: e.target.value,
    });
  };

  submitMe = (e) => {
      e.preventDefault()
    console.log(`${this.state.skill}  ${this.state.myText}`);
  };


  render() {
     // const {myText, skill}=this.state
 
    return (
        <form onSubmit={this.submitMe}>
          <input
            type="text"
            value={this.state.myText}
            onChange={this.FromHandlingText}
            placeholder="enter text"
          />

          <select value={this.state.skill} onChange={this.FromHandlingSelect}>
              <option value='Java'>Java</option>
              <option value='JavaScript'>JavaScript</option>
              <option value='PHP'>PHP</option>
          </select>
          <input type='submit' value='click me'/>
        </form>
    );
  }
}
