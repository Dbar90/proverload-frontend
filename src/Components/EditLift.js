import React, {Component} from 'react'
import {Form, Button} from 'react-bootstrap'

const baseUrl = process.env.REACT_APP_BASEURL

export default class EditLift extends Component {
  constructor(props){
    super(props)
    this.state = {
      name: props.lift.name,
      start_weight: props.lift.start_weight,
      current_weight: props.lift.current_weight,
      sets: props.lift.sets,
      reps: props.lift.reps,
      personal_best: props.lift.personal_best,
      notes: props.lift.notes,
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





  handleSubmit = () => {
    fetch(baseUrl + '/api/v1/lifts/' + this.props.lift.id, {
      method: 'PUT',
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
      this.props.updateLift(data.data)
    })
    .catch(error => console.error({'Error': error}))
  }


  render() {
    return(
      <>
        <td>
          <Form.Label>Lift Name</Form.Label>
          <Form.Control
            type='text'
            id='name'
            name='name'
            onChange={(e) => this.handleName(e)}
            value={this.state.name}
            />
        </td>
        <td>
          <Form.Label>Starting Weight</Form.Label>
          <Form.Control
            type='text'
            onChange={this.handleStartWeight}
            value={this.state.start_weight}
            />
        </td>
        <td>
          <Form.Label>Current Weight</Form.Label>
          <Form.Control
            type='text'
            onChange={this.handleCurrentWeight}
            value={this.state.current_weight}
            />
        </td>
        <td>
          <Form.Label>Sets</Form.Label>
          <Form.Control
            type='text'
            onChange={this.handleSets}
            value={this.state.sets}
            />
        </td>
        <td>
          <Form.Label>Reps</Form.Label>
          <Form.Control
            type='text'
            onChange={this.handleReps}
            value={this.state.reps}
            />
        </td>
        <td>
          <Form.Label>Personal Best</Form.Label>
          <Form.Control
            type='text'
            onChange={this.handlePersonalBest}
            value={this.state.personal_best}
            />
        </td>
        <td>
          <Form.Label>Notes</Form.Label>
          <Form.Control
            type='text'
            onChange={this.handleNotes}
            value={this.state.notes}
            />
        </td>
        <td>
        <Button variant="outline-light"
        onClick={this.handleSubmit}
        type='submit'
        value='Update'
        >
        Update
        </Button>
        </td>
      </>
    )
  }
}
