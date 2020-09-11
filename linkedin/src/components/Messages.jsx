import React from 'react';
import io from 'socket.io-client';
import Messenger from './Messenger.css'
import Navbar from './NavBar'
import ConversationList from '../components/ConversationList/index';
import MessageList from '../components/MessageList/index';


class Messages extends React.Component {

    socket = null;

    state = {
        username: null,
        messages: [],
        message: {
            recUsername: null,
            message: "",

        },
        users: []

    };

    componentDidMount() {
        const connOpt = {
            transports: ["websocket"],
        };
        this.socket = io(
            `https://striveschool-test.herokuapp.com/api/messages/${this.state.username}`, connOpt, {
            method: "GET",
            headers: {
                Authorization: "Basic" + btoa("user30:E6tYs6PBzufRfsVP")
            }
        });
        this.socket.on("bmsg", (msg) =>
            this.setState({ messages: this.state.messages.concat(msg) })
        );
    };

    render() {
        return (
            <>
                <Navbar />
                <div className="messenger" style={{ background: "#f6f6f6" }}>
                    <div className="scrollable sidebar">
                        <ConversationList />
                    </div>
                    <div className="scrollable content">
                        <MessageList />
                    </div>
                </div>


            </>

        )
    }
}


export default Messages