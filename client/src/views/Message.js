import React from "react";
import socket from "../components/Socket.js"
import API from "../util/API";

export class Message extends React.Component{
    state = {
        messageInput: "",
        messages: [],
        myInfo: null,
        theirInfo: null
    }

    componentDidMount() {
        this.setState({testVal: true})

        socket.on("message", message => {
            const previousMessages = this.state.messages
            this.setState({
                messages: previousMessages.concat(message),
                messageInput: ""
            })
        })

        const myId = this.props.userID || "auth0|5a2171e2083226773d5c2f4a"
        const theirId = this.props.match.params.userId
        API.getUserInfo(myId)
            .then(res => this.setState({myInfo: res.data[0]}))
            .then(() => API.getUserInfo(theirId))
            .then(res => this.setState({theirInfo: res.data[0]}))
            .then(() => console.log(this.state))
    }

    handleInputChange = event => {
        const { name, value } = event.target;

        this.setState({
            [name]: value
        });
    };

    sendMessage = event => {
        event.preventDefault()
        socket.emit("message", this.state.messageInput)
    }

    render() {
        return <div>Hello, world.
            <div>
                {this.state.messages ? this.state.messages.map((message, i) => {
                    return <div key={i}>{message}</div>
                }) : ""}
            </div>
            <form onSubmit={this.sendMessage}>
                Enter Message:
                <input type="text" name="messageInput" value={this.state.messageInput} onChange={this.handleInputChange}/>
            </form>
        </div>
    }
}