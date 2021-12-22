import React, {useState} from 'react'
import {Button} from 'react-bootstrap'


const Lift = (props) => {
  const [isInEditMode, setIsInEditMode] = useState(false)

  return(
      <tr key={props.id}>
      {!isInEditMode && (
        <>
        <td> {props.name} </td>
        <td><Button variant="outline-light">View/Edit</Button></td>
        <td><Button variant="outline-light">Delete</Button></td>
        </>
      )}
      </tr>
  )
}

export default Lift
