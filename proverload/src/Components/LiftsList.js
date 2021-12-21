import React, {Component} from 'react'
import {Button, Table} from 'react-bootstrap'


const baseUrl = process.env.REACT_APP_BASEURL

export default class Lifts extends Component {
  constructor(props){
    super(props)
    this.state = {
      lifts: [],
      name: '',
      // startWeight: '',
      // currentWeight: '',
      // sets: '',
      // reps: '',
      // personalBest: '',
      // notes: ''

    }
  }


  getLifts = (id) => {
    fetch(baseUrl + '/api/v1/lifts/workouts/' + id)
    .then(res => {
      if(res.status === 200) {
        return res.json()
      } else {
        return []
      }
    })
    .then(data => {
      console.log(data)
      this.setState({lifts: data.data})
    })
  }

  componentDidMount() {
    this.getLifts(this.props.workout_id)
  }



  render() {
    return(
    <Table striped bordered hover size="dark">
      <tbody>
       {this.state.lifts.map((lift, i) => {
         return (
           <tr key={lift.id}>
            <td> {lift.name} </td>
            <td><Button variant="outline-light">View/Edit</Button></td>
            <td><Button variant="outline-light">Delete</Button></td>
           </tr>
          )
        }
      )
    }
      </tbody>
    </Table>
    )
  }
}
