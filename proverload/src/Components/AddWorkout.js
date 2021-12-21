import React, {Component} from 'react'
import {Button} from 'react-bootstrap'
import {Form} from 'react-bootstrap'




export default class AddWorkout extends Component {
  constructor(props){
    super(props)
    this.state = {
      name: ""
    }
  }

  handleChange = (e) => {
    this.setState({
      name: e.target.value
    })
  }


  handleSubmit = (event) => {
    event.preventDefault()
    fetch(this.props.baseUrl + '/api/v1/workouts/', {
      method: 'POST',
      body: JSON.stringify({name: this.state.name}),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then( res => {
      return res.json()
    })
    .then( data => {
      this.props.addWorkout(data.data)
      this.setState({
        name: ''
      })
    })
    .catch (error => console.error({'Error': error}))
  }



  render() {
    return (
      <Form.Group controlId="formBasicEmail" className="mb-3" onSubmit={this.handleSubmit}>
        <input placeholder='Add Workout here' type="text" id="name" name="name" onChange={this.handleChange} value={this.state.name} />
        <Button type='submit' variant="dark">Add Workout</Button>
      </Form.Group>
    )
  }
}
