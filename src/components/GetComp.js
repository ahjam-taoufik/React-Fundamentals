import React, { Component } from 'react'
import axios from 'axios'



export default class GetComp extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
              posts:[{
                "id": 1, "title": "sunt aut fa1","body": "quia et suscipit\ns"},
                {"id": 2, "title": "qui est esse2","body": "est rerum tempore vitil "}]
         }
     }
     

    render() {
        const {posts} =this.state
      
        console.log(posts);
        return (
            <div>
             {posts.map(post=><h3>{post.title}</h3>)}
            </div>
        )
    }
}
