import React, {Component} from 'react'
import {Form, Button, Container} from 'react-bootstrap'

const baseUrl = process.env.REACT_APP_BASEURL


export default class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: '',
      userExists: true
    }
  }

  handleEmail = (event) => {
    this.setState({
      email: event.target.value
    })
  }

  handlePassword = (event) => {
    this.setState({
      password: event.target.value
    })
  }

  loginUser = async (event) => {
    event.preventDefault()
    const url = baseUrl + '/api/v1/users/' + (this.state.userExists ? 'login' : 'register')
    try {
      const response = await fetch(url, {
        method: 'POST',
        body: JSON.stringify({
          email: this.state.email,
          password: this.state.password,
        }),
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
      })
      if (response.status === 200) {
        this.setState({
          username: '',
          password: '',
        })
        this.props.isLoggedIn(true)
      }
    } catch (err) {
      console.log("Error", err)
    }
  }


  handleLoginMode = () => {
    this.setState({userExists: !this.state.userExists})
  }


  render() {
   return (
     <>
       <Container>
         <h2>{this.state.userExists ? 'Login' : 'Register'}</h2>
         <Form onSubmit={this.loginUser} gap={2} className="col-md-5 mx-auto">
           <Form.Group className='mb-3' controlId='formBasicEmail'>
             <Form.Label>Email</Form.Label>
             <Form.Control
               type='text'
               placeholder='Enter Email'
               onChange={(event) => this.handleEmail(event)}
               value={this.state.email}
             />
           </Form.Group>

           <Form.Group className="mb-3" controlId="formBasicPassword">
             <Form.Label>Password</Form.Label>
             <Form.Control
               type="password"
               onChange={(event) => this.handlePassword(event)}
               value={this.state.password}
               placeholder="Password"
             />
           </Form.Group>

           <Button variant="primary" type="submit">
             {this.state.userExists ? "Sign In" : "Sign Up"}
           </Button>
           <br />
         </Form>
         <p
           type="button"
           variant="submit"
           className="signInToggle"
           onClick={this.handleLoginMode}
         >
           {this.state.userExists
             ? "Create new account"
             : "Login with existing account"}
         </p>
       </Container>
     </>
   );
 }
}
