import MyPro from "./MyPro"
import Profile from "./Profile"
import About from "./About"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { useState } from "react"

function App(){
    const[route, setRoute] = useState(localStorage.getItem('route'))
    return(
        <div>
            <Router>
                <Routes>
                    <Route path='/' element={<Profile/>}/>
                    <Route path='/about' element={<About/>}/>
                    <Route path='/projects' element={<MyPro/>}/>
                </Routes>
            </Router>
        </div>
    )
}

export default App