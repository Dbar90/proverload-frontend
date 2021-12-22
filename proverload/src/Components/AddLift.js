import React, {Component} from 'react'
import {Form, Button} from 'react-bootstrap'

const baseUrl = process.env.REACT_APP_BASEURL

export default class AddLift extends Component {
  constructor(props){
    super(props)
    this.state = {
      name: '',
      start_weight: '',
      current_weight: '',
      sets: '',
      reps: '',
      personal_best: '',
      notes: '',
      workout_id: this.props.workout_id
    }
  }

  handleName = (event) => {
    this.setState({
      name: event.target.value
    })
  }

  handleStartWeight = (event) => {
    this.setState({
      start_weight: event.target.value
    })
  }

  handleCurrentWeight = (event) => {
    this.setState({
      current_weight: event.target.value
    })
  }

  handleSets = (event) => {
    this.setState({
      sets: event.target.value
    })
  }

  handleReps = (event) => {
    this.setState({
      reps: event.target.value
    })
  }

  handlePersonalBest = (event) => {
    this.setState({
      personal_best: event.target.value
    })
  }

  handleNotes = (event) => {
    this.setState({
      notes: event.target.value
    })
  }





  handleSubmit = (event) => {
    event.preventDefault()
    fetch(baseUrl + '/api/v1/lifts/', {
      method: 'POST',
      body: JSON.stringify({
        name: this.state.name,
        start_weight: this.state.start_weight,
        current_weight: this.state.current_weight,
        sets: this.state.sets,
        reps: this.state.reps,
        personal_best: this.state.personal_best,
        notes: this.state.notes,
        workout_id: this.props.workout_id
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(res => {
      return res.json()
    })
    .then(data => {
      const workout_id = this.props.workout_id
      this.props.addLift(data.data)
      this.setState({
        name: '',
        start_weight: '',
        current_weight: '',
        sets: '',
        reps: '',
        personal_best: '',
        notes: '',
        workout_id: workout_id
      })
    })
    .catch(error => console.error({'Error': error}))
  }


  render() {
    return(
      <Form onSubmit={this.handleSubmit} workout_id={this.props.workout_id}>
        <Form.Group className='mb-3 lift'>
          <Form.Label>Lift Name</Form.Label>
          <Form.Control
            type='text'
            onChange={this.handleName}
            value={this.state.name}
            />
        </Form.Group>
        <Form.Group className='mb-3 lift'>
          <Form.Label>Starting Weight</Form.Label>
          <Form.Control
            type='text'
            onChange={this.handleStartWeight}
            value={this.state.start_weight}
            />
        </Form.Group>
        <Form.Group className='mb-3 lift'>
          <Form.Label>Current Weight</Form.Label>
          <Form.Control
            type='text'
            onChange={this.handleCurrentWeight}
            value={this.state.current_weight}
            />
        </Form.Group>
        <Form.Group className='mb-3 lift'>
          <Form.Label>Sets</Form.Label>
          <Form.Control
            type='text'
            onChange={this.handleSets}
            value={this.state.sets}
            />
        </Form.Group>
        <Form.Group className='mb-3 lift'>
          <Form.Label>Reps</Form.Label>
          <Form.Control
            type='text'
            onChange={this.handleReps}
            value={this.state.reps}
            />
        </Form.Group>
        <Form.Group className='mb-3 lift'>
          <Form.Label>Personal Best</Form.Label>
          <Form.Control
            type='text'
            onChange={this.handlePersonalBest}
            value={this.state.personal_best}
            />
        </Form.Group>
        <Form.Group className='mb-3 lift'>
          <Form.Label>Notes</Form.Label>
          <Form.Control
            type='text'
            onChange={this.handleNotes}
            value={this.state.notes}
            />
        </Form.Group>
        <Button variant='dark' type='submit'>Submit</Button>
      </Form>
    )
  }
}
