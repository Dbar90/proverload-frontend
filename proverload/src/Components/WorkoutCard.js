import React, {useState} from 'react'
import {Card, ButtonGroup, Button} from 'react-bootstrap'
import Lifts from './LiftsList'



const Workout = (props) => {
  const [isToggled, setIsToggled] = useState(false)




  return (
    <Card key={props.workout.id}>
      <Card.Body>
        <Card.Title>Workout: {props.name}</Card.Title>
        {isToggled && <Lifts workout_id={props.workout.id}/>}
        <ButtonGroup aria-label="Basic example">
          {isToggled ?
            <Button
            onClick={() => setIsToggled(!isToggled)}
          variant='dark'
          >Close Workout
          </Button> :
          <Button
          onClick={() => setIsToggled(!isToggled)}
          variant='dark'
          >View Workout
          </Button>}
          <Button
          variant='dark'
          onClick={() => props.deleteWorkout(props.workout.id)}
          >Remove Workout
          </Button>
        </ButtonGroup>
      </Card.Body>
    </Card>
  )
}


export default Workout
