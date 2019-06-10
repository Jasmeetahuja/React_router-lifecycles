import React,{ Component } from 'react';


// class Postsitem extends Component {
//      constructor(props){
//          super(props);
//      }



//     render(){

//         console.log(this.props)
//         return <div>{this.props.match.params.id}</div>
//     }
// }


const Postsitem = ({match}) =>{
    return<div>{match.params.id}</div>
}

export default Postsitem;