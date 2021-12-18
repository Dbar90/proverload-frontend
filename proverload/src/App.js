import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Workouts from './Components/WorkoutsList';






function App() {
  return (
    <div className="App">
    <h1> Progressive Overload </h1>
      <br/>
      <Workouts />

    </div>
  );
}

export default App;
