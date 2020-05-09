import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchMessages ,deleteMessage } from '../store/actions/message';
import MessageItem from '../components/MessageItem';
class Message extends Component {
    componentDidMount() {
        this.props.fetchMessages()
    }
    render() {
        const { message ,deleteMessage,currentUser } = this.props
        console.log(currentUser.user.profileImageUrl)
        let messageItem = message.map(m => 
            (
                <MessageItem
                key={m._id}
                username={m.user.username}
                text={m.text}
                date={m.createdAt}
                profileImageUrl={m.user.profileImageUrl}
                remove={deleteMessage.bind(this,m.user._id,m._id)}
                isCorrectUser={currentUser.user.id === m.user._id}
                />
            )
            )
           
        return (
            <div className="row col-sm-8">
                <div className="offset-1 col-sm-10">
                    <ul className="list-group" id="message">
                    {messageItem}
                    </ul>
                
                </div>

            </div>
        );
    }
}

const mapStatetoProps = (state) => {
    return {
        message: state.message,
        currentUser: state.currentUser
    }
}

export default connect(mapStatetoProps, { fetchMessages ,deleteMessage })(Message);