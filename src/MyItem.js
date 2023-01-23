import React from 'react';



// class Item extends React.Component {
//     constructor(props){
//         super(props)

//         this.state = {
//             clicks: 0,
//             clicksRemaining: 100,
//         }
//     }
    
//     clickMe() {
//         this.setState({
//             clicks: this.state.clicks + 1,
//             clicksRemaining: this.state.clicksRemaining - 1,
//         })
//     }
    
//     render() {
//       return (
//         <div>
//     <h1 onClick={() => this.clickMe()}>Hello from {this.props.name}</h1>
//         <span>{this.state.clicks} is the number of clicks. Remaining clicks: {this.state.clicksRemaining}</span>            
//         </div>
       
//       )
//     }
//   }

class Item extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      clicks:0
    }
  }

  clickMe() {
    this.setState({
      clicks: this.state.clicks + 1
    })
  }
    render() {
      return(
        <div>
        <button onClick={() => this.clickMe()}>Hello there from {this.props.name}</button>
        <span>{this.state.clicks}</span>          
        </div>
       
      )
    }
  }


  export default Item;