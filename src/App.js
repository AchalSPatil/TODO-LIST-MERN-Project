

import './App.css';

// components
import Header from './components/header';
import TodoForm from './components/TodoForm';
import Todos from './components/Todos';
// import Login from "./components/login/login"
// import Register from "./components/register/register"
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import { useEffect, useState } from 'react';

function App() {
  // const [ user, setLoginUser] = useState({})

  // useEffect(() => {
  //   setLoginUser(JSON.parse(localStorage.getItem("MyUser")))
  // }, [])

  // const updateUser = (user) => {
  //   localStorage.setItem("MyUser", JSON.stringify(user))
  //   setLoginUser(user)
  // }
  return (
    <div>
      <Header />
      <TodoForm />
      <Todos />
      {/* <Router>
        <Switch>
          <Route exact path="/">
            {
              user && user._id ? <TodoForm updateUser={updateUser} /> : <Login updateUser={updateUser}/>
            }
          </Route>
          <Route path="/login">
            <Login updateUser={updateUser}/>
          </Route>
          <Route path="/register">
            <Register />
          </Route>
        </Switch>
      </Router> */}
    </div>
  );
}

export default App;


