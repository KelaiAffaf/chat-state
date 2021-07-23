import {Component} from 'react'

class Chat extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            msg:"",
           
         }
    }

    
 inputChangeHandler = (e) =>
    {
        this.setState({msg:e.target.value});
    }


    render() { 
        return (
           <div className="container">
                <h1>{this.props.name}</h1>
                <form onSubmit={(e) =>{e.preventDefault(); this.props.SendMsg(this.state.msg) ;this.setState({msg: ""}) } }>
                <input
                type="text"
                placeholder="Ecrire un message"
                onChange={this.inputChangeHandler}
                value={this.state.msg}
                ></input>
                <input  type="submit"></input>
            </form>
            <h1>Message</h1>
            <h3>{this.props.chatMessage} </h3>
           </div>

          );
    }
}
 
export default Chat;