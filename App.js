import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./components/Home"
import Employees from "./components/Employees"
import Department from "./components/Department"
import "./App.css"

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/employees" element={<Employees />} />
          <Route path="/department/:deptName" element={<Department />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
