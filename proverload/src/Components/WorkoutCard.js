import React, {Component} from 'react'
import {Card} from 'react-bootstrap'
import Lifts from './LiftsList'


export default class Workout extends Component {
  constructor(props){
    super(props)
    this.state = {
      name: ""
    }
  }





  render() {
    return (
      <Card key={this.props.i} style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title>Workout: {this.props.name}</Card.Title>
          <Card.Link href="#">View Workout</Card.Link>
          <Lifts workout={workout._id} />
          <Card.Link href="#" onClick={() => this.props.deleteWorkout(this.props.workout._id)}>Remove Workout</Card.Link>
        </Card.Body>
      </Card>
    )
  }
}
