import React, {Component} from 'react'


export default class Lift extends Component {
  constructor(props){
    super(props)
    this.state = {
      name: '',
      startWeight: '',
      currentWeight: '',
      sets: '',
      reps: '',
      personalBest: '',
      notes: ''
    }
  }
}
