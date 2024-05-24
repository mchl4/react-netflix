import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import NLogin from "./components/pages/login/NLogin"
import Home from "./components/pages/home/Home"
import Movies from "./components/pages/movie/Movies"



function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/login" element={<NLogin/>}/>
          <Route path="/home" element={<Home/>}/>
          <Route path="/movies" element={<Movies/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App