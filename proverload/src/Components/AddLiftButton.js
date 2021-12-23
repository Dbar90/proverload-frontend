import React, {useState} from 'react'
import {Button} from 'react-bootstrap'
import AddLift from './AddLift'


const LiftButton = (props) => {
  const [isToggled, setIsToggled] = useState(false)


  const saveNewLift = (lift) => {
    props.addLift(lift)
    setIsToggled(!isToggled)
  }

  return (
    <>
    {isToggled && <AddLift addLift={saveNewLift} workout_id={props.workout_id}/>}
    {isToggled ? <Button onClick={() => setIsToggled(!isToggled)} variant='dark'>Cancel</Button> : <Button onClick={() => setIsToggled(!isToggled)} variant='dark'>Create Lift</Button>}
    </>
  )
}

export default LiftButton
