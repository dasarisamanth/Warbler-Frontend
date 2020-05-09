import React, { Component } from 'react';
import{ Link}  from 'react-router-dom';
import { connect} from 'react-redux';
import {logout} from '../store/actions/auth'




class Navbar extends Component {
    logout=e=>{
        e.preventDefault();
        this.props.logout()
    }
   
    render() {
        return (
            <nav id="background" className="navbar navbar-expand">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <Link to='/' className='navbar-brand'>
                            <img src="https://img.icons8.com/ios-filled/48/000000/twitter.png" alt="warbler-logo" />
                        </Link>
                    </div>
                    
                    <div>
                    {this.props.currentUser.isAuthenticated ? (
                        <ul className='nav navbar-nav navbar-right'>
                        <li>
                            <Link className='mr-2' to={`user/${this.props.currentUser.user.id}/message/new`}>New Message</Link>
                        </li>
                        <li>
                           <a href="/" onClick={this.logout}>Logout</a>
                        </li>

                    </ul>
                    ) :
                    (
                        <ul className='nav navbar-nav navbar-right'>
                            <li>
                                <Link className='mr-2' to='/signup'>Sign Up</Link>
                            </li>
                            <li>
                                <Link className='ml-2' to='/signin'>Log In</Link>
                            </li>

                        </ul>
                    )
    }
                    </div>
    

                </div>


            </nav>
        );
    }
}

const mapStateToProps= state=>{
    return{
        currentUser : state.currentUser
    }
}

export default connect(mapStateToProps,{logout})(Navbar);