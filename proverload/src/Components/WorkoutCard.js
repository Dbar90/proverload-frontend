import React, {useState} from 'react'
import {Card, Button} from 'react-bootstrap'
import Lifts from './LiftsList'



const Workout = (props) => {
  const [isToggled, setIsToggled] = useState(false)
  const [liftToggle, setLiftToggle] = useState(false)




  return (
    <Card  style={{ width: '25rem' }}>
      <Card.Body>
        <Card.Title>Workout: {props.name}</Card.Title>
        {isToggled && <Button variant='dark' onClick={() => setLiftToggle(!liftToggle)}>Add Lift</Button>}

        {isToggled && <Lifts workout_id={props.workout.id}/>}
        {isToggled && <Button variant='dark'>Add Lift</Button>}
        {isToggled ? <Button onClick={() => setIsToggled(!isToggled)} variant='dark'>Close Workout</Button> : <Button onClick={() => setIsToggled(!isToggled)} variant='dark'>View Workout</Button>}
        <Button variant='dark'  onClick={() => props.deleteWorkout(props.workout.id)}>Remove Workout</Button>
      </Card.Body>
    </Card>
  )
}


export default Workout
