import React, { Component } from 'react';
import { connect} from 'react-redux';
import { postMessage } from '../store/actions/message';
class MessageForm extends Component {
  constructor(props){
      super(props)
      this.state={
          message:""
      }
      
  }

  handleSubmit(e){
      e.preventDefault();
      this.props.postMessage(this.state.message)
      this.setState({message:""})
      this.props.history.push('/')
  }
    
    render() { 
        return ( 
            <div>
            <form onSubmit={this.handleSubmit.bind(this)}>
                {this.props.error.message && (
                    <div className="alert alert-danger">{this.props.error.message}</div>
                )}
                <input
                className="form-control mb-2"
                type="text"
                value={this.state.message}
                onChange={e=> this.setState({message:e.target.value})}
                />

              <button type="submit" className="btn btn-success">Add Message</button>
            </form>
            </div>
         );
    }
}

function mapStateToProps(state){
    return{
        error:state.error
        
    }
}
 
export default connect(mapStateToProps,{postMessage})(MessageForm);