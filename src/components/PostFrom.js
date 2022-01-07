


import axios from 'axios'
import React, { Component } from 'react'

export default class PostFrom extends Component {
      constructor(props) {
          super(props)
          this.state = {
              userId:'',
              title:'',
              body:'' 
          }
      }
      
    formHandler=(e)=>{  
        this.setState({
           [e.target.name]:e.target.value,
           [e.target.name]:e.target.value,
           [e.target.name]:e.target.value,
        })}

     submitHandler=(e)=>{
         e.preventDefault()
      // console.log(this.state);
         axios.post('https://jsonplaceholder.typicode.com/posts',this.state)
         .then(response=>console.log(response))
         .then(error=>console.log(error))
    }   
        

    render() {
        const {userId,title,body}=this.state
        return (
            <div>
                 <form  onSubmit={this.submitHandler} >
                     <input name='userId' type='text' value={userId} onChange={this.formHandler}  placeholder='userid'   /> <br/>
                     <input name='title' type='text' value={title} onChange={this.formHandler} placeholder='title'   /><br/>
                     <input name='body' type='text' value={body} onChange={this.formHandler}  placeholder='body'  />
                     <button type='submit'>Clik Me</button>
                 </form>
            </div>
        )
    }
}
