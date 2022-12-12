import {BrowserRouter as Router, Route,Routes } from 'react-router-dom'

import Home from "./pages/Home/Home";
import TopBar from "./components/topbar/TopBar";
import Register from "./pages/register/Register";
import Login from "./pages/login/Login";
import Profile from "./pages/profile/Profile";
import Write from "./pages/write/Write";
import Single from "./pages/Single/Single";


function App() {
  const user = false
  return (
    <Router>
        <TopBar/>
        <Routes>
            <Route exact path="/" element={<Home/>} />
            <Route path="/register" element={user ? <Home/>: <Register/>} />
            <Route path="/login" element={user ? <Home/>: <Login/>} />
            <Route path="/write" element={user ? <Write/>: <Register/>} />
            <Route path="/profile" element={user ? <Profile/>: <Register/>} />
            <Route path="/post/:postId" element={<Single/>} />
        </Routes>
    </Router>
  );
}

export default App;
