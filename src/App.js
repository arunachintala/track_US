
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Page1 from './Containers/Page1';
import Page2 from './Containers/Page2';
import Page3 from './Containers/Page3';
import './App.css'
function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route path="/track_US/" element={<Page1 />} />
                    <Route path="/track_US/page2" element={<Page2 />} />
                    <Route path="/track_US/page3" element={<Page3 />} />

                </Routes>
            </div>
        </Router>
    );
}

export default App;

