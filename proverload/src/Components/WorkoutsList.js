import React, {Component} from 'react'
import Workout from './WorkoutCard'
import AddWorkout from './AddWorkout'
import 'bootstrap/dist/css/bootstrap.min.css'


const baseUrl = process.env.REACT_APP_BASEURL

export default class Workouts extends Component {
  constructor(props){
    super(props)
    this.state = {
      workouts: [],
      name: ""
    }
  }

  getWorkouts = (workouts) => {
    fetch(baseUrl + '/api/v1/workouts/')
    .then(res => {
      if(res.status === 200) {
        return res.json()
      } else {
        return []
      }
    })
    .then(data => {
      console.log(data)
      this.setState({workouts: data.data})
    })
  }



  addWorkout = (newWorkout) => {
    const copyWorkouts = [...this.state.workouts]
    copyWorkouts.push(newWorkout)
    this.setState({
      workouts: copyWorkouts
    })
  }

  deleteWorkout = (id) => {
    console.log(id)
    fetch(baseUrl + '/api/v1/workouts/' + id, {
      method: 'DELETE'
    })
    .then(res => {
      const findIndex = this.state.workouts.findIndex(workout => workout.id === id)
      const copyWorkouts = [...this.state.workouts]
      console.log(findIndex)
      copyWorkouts.splice(findIndex, 1)
      this.setState({
        workouts: copyWorkouts
      })
    })
  }

  componentDidMount() {
    this.getWorkouts()
  }


  render() {
    return(
      <div>
        <div><AddWorkout baseUrl={baseUrl} addWorkout={this.addWorkout}/></div>
        <div className="card-container">
          {this.state.workouts.map((workout, i) => {
            return (
              <Workout
                key={workout.id}
                name={workout.name}
                workout={workout}
                baseUrl={baseUrl}
                deleteWorkout={this.deleteWorkout}
              />
            )
          }
        )
      }
        </div>
      </div>
    )
  }
}
