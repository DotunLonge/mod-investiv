import React, {Component} from 'react';
import styled from 'styled-components';
import axios from 'axios';

const LoginStyleWrapper = styled.div`
height: calc(100vh - 150px);

h3{
  font-size: 1.35em;
  font-weight: 500; 
  margin: 2em 0 1em; 
}

.form-group{
  margin: 1em 0;

  input{
    font-size: 1em;
    font-weight: 300;
    padding: 1em;
    width: 100%;
    border: 1px solid #eee;
    border-radius: 4px;
  }

  button{
    cursor: pointer !important;
    width: auto;
    padding: 1em 2.5em;
    font-size: 1em;
    background:#009444;
    color: white;
    border: 0;
    border-radius: 3px;
    &:hover{
      background: #0e6f34;
    }
  }
}

`;

class Login extends Component{
  constructor(props){
    super(props);
    this.state = {
      user: "",
      password: ""
    }
  }
  
  handleChange = e => {
    clearTimeout(this.clearId);
    this.setState({
      [e.target.name]: e.target.value,
      failed: false
    });
  }

  handleSubmit = e => {
    e.preventDefault();
    let url = "https://investiv.now.sh/login";
    axios({
      url,
      method: "POST",
      data: this.state
    }).then(res=>{
      if(sessionStorage){
        sessionStorage.setItem("isAuthenticated", "true");
      }
      window.location.replace("/dashboard/gallery");
    }).catch(res=>{
      this.setState({failed: true});
      this.clearId = setTimeout(()=>{
        this.setState({
          failed: false
        });
      },5000);
    });
  }

  render(){

    return (
      <LoginStyleWrapper className="xs-12">
          <div className='i-h t-c c-w xs-12'>
            <div className='i-h t-c c'>
              <div className='xs-10 xs-off-1 sm-8 sm-off-2 md-6 md-off-3 lg-4 lg-off-4'>
                <form className='xs-12 'onSubmit={this.handleSubmit}>
                  <h3>Welcome</h3>
                  <div className='form-group xs-12'>
                    <input className='xs-12' name='user' placeholder='Username or email address' onChange={this.handleChange} required/>
                  </div>
                  <div className='form-group xs-12'>
                    <input className='xs-12' name='password' placeholder='Password' type='password' onChange={this.handleChange} required />
                  </div>
                  <div className='form-group xs-12'>
                    <button type='submit'>Log in</button>
                  </div>
                  {this.state.failed && <p style={{color: "tomato"}}> Login Failed </p>}
                  
                </form>
              </div>
            </div>
          </div>
      </LoginStyleWrapper>
    )
  }
}


export default Login;