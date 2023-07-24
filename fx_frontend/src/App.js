import Home from "./components/Home";

import { BrowserRouter as Router, Route, Routes, Switch } from 'react-router-dom';

import Login from "./components/Login";
import Register from "./components/Register";
import UserAccount from "./components/UserAccount";
import Profile from "./components/Profile";
import Transfer from "./components/Transfer";


function App() {
  return (
    <div className='App'>
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/login" element={<Login />} />
      <Route exact path="/register" element={<Register />} />
      <Route exact path="/useraccount" element={<UserAccount />} />

      <Route exact path="/profile" element={<Profile />} />

      <Route exact path="/transfer" element={<Transfer />} />
    

    </Routes>

</div>
  );
}

export default App;
