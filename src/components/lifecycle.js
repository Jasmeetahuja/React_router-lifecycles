import React, {Component } from 'react'



class Lifecycle extends Component {
// 1 get default state
    constructor(props){
        super(props)

 // 2 set initial state
      this.state = {
          title:'Pulp fiction in cinemas',
          body: 'some dummy text'
      }  
    }

 // 3 before gets created
 componentWillMount(){
     console.log('Before component gets created')
     
 }   
 
// 4 render JSX
    render(){
        return(
            <div>
                <h1>{this.state.title}</h1>
                <br/>
                <div>{this.state.body}</div>
            </div>
        )
    }

 // 5 after a component is mounted
 
 componentDidMount(){
     console.log('After a component is mount')
     document.querySelector('h1').style.color = 'red'
 }
}

 

export default Lifecycle;