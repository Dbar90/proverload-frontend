import React, {Component} from 'react'

const baseUrl = process.env.REACT_APP_BASEURL

export default class Lifts extends Component {
  constructor(props){
    super(props)
    this.state = {
      lifts: [],
      name: '',

    }
  }


  getLifts = (lifts) => {
    fetch(baseUrl + '/api/v1/lifts/workouts/')
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
    this.getLifts()
  }



  render() {
    return(
      <></>
    )
  }
}
