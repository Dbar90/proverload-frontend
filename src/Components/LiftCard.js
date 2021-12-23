import React, {useState} from 'react'
import {Button} from 'react-bootstrap'
import EditLift from './EditLift'

const Lift = (props) => {
  const [isInEditMode, setIsInEditMode] = useState(false)


  const toggleEditMode = () => {
    setIsInEditMode(!isInEditMode)
  }


  const saveUpdatedLift = (lift) => {
    props.updateLift(lift)
    setIsInEditMode(!isInEditMode)
  }


  return(

      <tr key={props.id}>
      {!isInEditMode && (
        <>
        <td> {props.name} </td>
        <td> {props.start_weight} lbs.</td>
        <td> {props.current_weight} lbs.</td>
        <td> {props.sets} Sets</td>
        <td> {props.reps} Reps</td>
        </>
        )}
      {isInEditMode && (
        <EditLift updateLift={saveUpdatedLift} lift={props.lift} key={props.id} />
      )}
        <td><Button onClick={toggleEditMode} variant="outline-light">{!isInEditMode ? 'View/Edit' : 'Cancel'}</Button></td>
      {!isInEditMode && (
        <td><Button variant="outline-light" onClick={() => props.deleteLift(props.lift.id)} >Delete</Button></td>
      )}




      </tr>

  )
}

export default Lift
