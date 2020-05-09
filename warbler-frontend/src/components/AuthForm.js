import React, { Component } from 'react';


class AuthForm extends Component {
  constructor(props){
    super(props)
  this.state = {
    email: '',
    password: '',
    username: '',
    profileImageUrl: ''
  }
  this.handleSubmit=this.handleSubmit.bind(this)
}

handleChange=(evt)=>{
  this.setState({[evt.target.name]: evt.target.value})
 
}
handleSubmit(e){
  e.preventDefault();
  const authType = this.props.signUp ? "signup" : "signin"

  this.props.onAuth(authType , this.state).then(()=>{
    this.props.history.push('/')
  })
  .catch(()=>{
   return;
  })
}
  render() {

    const { email, username, password, profileImageUrl } = this.state
    const{ signUp , heading , buttonText, error , history,removeError} = this.props

    history.listen(()=>{
      removeError()
    })

    
    return (
      <div className="container">
        <div className="row justify-content-md-center ">
    
          <div className="col-md-6">
          <h1>{heading}</h1>
            <form onSubmit={this.handleSubmit}  >
            {error.message && (<div className="alert alert-danger">{error.message}</div>)}
              <label htmlFor="email">Email</label>
              <input
              autoComplete="off"
              name="email"
              className="form-control"
                type="email"
                required
                id="email"
                value={email}
                onChange={this.handleChange}
              />
              <label htmlFor="password">Password</label>
              <input
              autoComplete="off"
              name="password"
              className="form-control"
                type="password"
                required
                id="password"
                value={password}
                onChange={this.handleChange}
              />

              {signUp && (
                <div>
                  <label htmlFor="user">UserName</label>
                  <input
                  autoComplete="off"
                  name="username"
                  className="form-control"
                    type="text"
                    required
                    id="user"
                    value={username}
                    onChange={this.handleChange}
                  />
                  <label htmlFor="profile">ProfileImageUrl</label>
                  <input
                  autoComplete="off"
                  name='profileImageUrl'
                  className="form-control"
                    type="text"
                    
                    id="profile"
                    value={profileImageUrl}
                    onChange={this.handleChange}
                  />

                </div>

              )

              }
             <button type="submit" className="btn btn-primary btn-block btn-lg mt-3">{buttonText}</button>
            </form>



          </div>

        </div>

      </div>
    );
  }
}

export default AuthForm;