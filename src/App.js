import React, {Component} from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import BlogList from './pages/BlogList'
import BlogDetail from './pages/BlogDetail'

class App extends Component {
  render() {
    return (
    <Router>
      <Routes>
        <Route path="/" element = {<BlogList/>}/>
        <Route path="/blog/:id" element = {<BlogDetail/>}/>
      </Routes>
    </Router>
    );

  }
  
}

export default App;
