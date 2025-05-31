import React from 'react'
import Navbar from "./sections/Navbar.jsx";
import {Hero} from "./sections/Hero.jsx";

const App = () => {
    return (
        <header className="max-w-7xl mx-auto">
            <Navbar />
            <Hero />
        </header>
    )
}
export default App
