import React, {Component} from 'react'
import {Table} from 'react-bootstrap'
import Lift from './LiftCard'
import LiftButton from './AddLiftButton'


const baseUrl = process.env.REACT_APP_BASEURL

export default class Lifts extends Component {
  constructor(props){
    super(props)
    this.state = {
      lifts: [],
      name: '',
      startWeight: '',
      currentWeight: '',
      sets: '',
      reps: '',
      personalBest: '',
      notes: ''
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

  addLift = (newLift) => {
    const copyLifts = [...this.state.lifts]
    copyLifts.push(newLift)
    this.setState({
      lifts: copyLifts
    })
  }

  deleteLift = (id) => {
    fetch(baseUrl + '/api/v1/lifts/' + id, {
      method: 'DELETE'
    })
    .then(res => {
      const findIndex = this.state.lifts.findIndex(lift => lift.id === id)
      const copyLifts = [...this.state.lifts]
      copyLifts.splice(findIndex, 1)
      this.setState({
        lifts: copyLifts
      })
    })
  }


  updateLift = (updatedLift) => {
    const copyLifts = [...this.state.lifts]
    const findIndex = this.state.lifts.findIndex(lift => lift.id === updatedLift.id)
    copyLifts[findIndex].name = updatedLift.name
    copyLifts[findIndex].start_weight = updatedLift.start_weight
    copyLifts[findIndex].current_weight = updatedLift.current_weight
    copyLifts[findIndex].sets = updatedLift.sets
    copyLifts[findIndex].reps = updatedLift.reps
    copyLifts[findIndex].personal_best = updatedLift.personal_best
    copyLifts[findIndex].notes = updatedLift.notes
    copyLifts[findIndex].workout_id = updatedLift.workout_id
    this.setState({
      lifts: copyLifts
    })
  }


  componentDidMount() {
    this.getLifts(this.props.workout_id)
  }



  render() {
    return(
      <div>
    <Table striped bordered hover size="dark">
      <tbody>
       {this.state.lifts.map((lift, i) => {
         return (
          <Lift
            key={lift.id}
            name={lift.name}
            lift={lift}
            deleteLift={this.deleteLift}
            updateLift={this.updateLift}
            />
              )
            }
          )
        }
      </tbody>
    </Table>

    <LiftButton addLift={this.addLift} workout_id={this.props.workout_id}/>
      </div>
    )
  }
}
