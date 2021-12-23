import './App.css';
import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Workouts from './Components/WorkoutsList';
import Login from './Components/UserLogin'
import {Navbar, Button} from 'react-bootstrap'

const baseUrl = process.env.REACT_APP_BASEURL



const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)


  const logOut = () => {
    fetch(baseUrl + '/api/v1/users/logout', {
      method: 'GET'
    })
    .then(res => {
      if (res.status === 200) {
        setIsLoggedIn(false)
      }
    })
  }


  return (
    <div className="App">
    <Navbar bg="transparent" variant="transparent">
       <Navbar.Brand>
         <h1>Progressive Overload</h1>
       </Navbar.Brand>
       <Navbar.Toggle />
       <Navbar.Collapse className="justify-content-end">
         <Navbar.Text>
           {isLoggedIn && (
             <Button size="lg" variant="dark" onClick={logOut}>
               Log out
             </Button>
           )}
         </Navbar.Text>
       </Navbar.Collapse>
     </Navbar>

      {!isLoggedIn && <Login isLoggedIn={setIsLoggedIn}/>}

      {isLoggedIn && <Workouts />}
    </div>
  );
}

export default App;
