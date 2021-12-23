import React, {useState} from 'react'
import {Button} from 'react-bootstrap'
import AddLift from './AddLift'


const LiftButton = (props) => {
  const [isToggled, setIsToggled] = useState(false)


  return (
    <>
    {isToggled && <AddLift addLift={props.addLift} workout_id={props.workout_id}/>}
    {isToggled ? <Button onClick={() => setIsToggled(!isToggled)} variant='dark'>Cancel</Button> : <Button onClick={() => setIsToggled(!isToggled)} variant='dark'>Create Lift</Button>}
    </>
  )
}

export default LiftButton
