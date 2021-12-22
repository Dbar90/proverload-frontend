import React, {Component} from 'react'
import {Table} from 'react-bootstrap'
import Lift from './LiftCard'
import AddLift from './AddLift'

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
            />
              )
            }
          )
        }
      </tbody>
    </Table>
     <AddLift addLift={this.addLift} workout_id={this.props.workout_id}/> </div>
    )
  }
}
