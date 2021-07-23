import logo from './logo.svg';
import './App.css';
import Chat from './Chat';
import { Component } from 'react';

class App extends Component {
   constructor(props) {
        super(props);
        this.state = { 
            message1:"",
            message2:""
         }
    }

  render(){

    return (
      <div className="App">
       <Chat name="Ali"
        SendMsg={msg=> this.setState({message1:msg})} 
        chatMessage={this.state.message2}
       />
       <div className="separator"></div>
       <Chat name="Mohammed"
        SendMsg={msg=>this.setState({message2:msg})} 
        chatMessage={this.state.message1}
       />
      </div>

     
    );
  }
 
}

export default App;
