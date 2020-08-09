import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import
{
BrowserRouter as Router,
Route,
} from "react-router-dom";
import Navbar from './Components/Navbar';
import Home from './contents/Home';
import About from './contents/About';
import Education from './contents/Education';
import Skills from './contents/skills';
import Contact from './contents/Contact';
function App() {
return (
<Router>
<div className="App">
<Navbar />
<Route exact path="/">
<Home />
</Route>
<Route exact path="/about">
<About />
</Route>
{/* Route for Education.js contents */}
<Route path="/education">
<Education />
</Route>
{/* Route for Skills.js contents */}
<Route path="/skills">
<Skills />
</Route>
</div>
{/* Route for Contact.js contents */}
<Route path="/contact">
<Contact />
</Route>
</Router>
)
}
export default App;