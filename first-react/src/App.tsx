import { } from "bootstrap/dist/css/bootstrap.css"
import Navbar from "./Navbar";
import Footer from "./Footer";
import Body from "./Search-Page/Body";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Plan from "./Tour-Plan-Page/PlanBody";



function App() {

  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/search" element={<Body/>}></Route>
          <Route path="/plan" element={<Plan/>}></Route>
        </Routes>
        <Footer />
      </Router>
    </div>

  )
}

export default App