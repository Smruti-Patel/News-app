// import logo from './logo.svg';
import './App.css';
import News from './components/News';
import NavBar from './components/NavBar';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
// import LoadingBar from 'react-top-loading-bar'

function App() {
  return (
    <>
    <NavBar title='News App'/>
    {/* <LoadingBar
      color='#f11946'
      progress={this.state.progress}
    /> */}
    <div>
      <Router>
        <Routes>
          <Route exact path='/' element={<News   pageSize={5} country="us" category="home"/>}/>
          <Route exact path='/business' element={<News   pageSize={5} country="us" category="business"/>}/>
          <Route exact path='/entertainment' element={<News   pageSize={5} country="us" category="entertainment"/>}/>
          <Route exact path='/general' element={<News   pageSize={5} country="us" category="general"/>}/>
          <Route exact path='/science' element={<News   pageSize={5} country="us" category="science"/>}/>
          <Route exact path='/health' element={<News    pageSize={5} country="us" category="health"/>}/>
          <Route exact path='/sports' element={<News   pageSize={5} country="us" category="sports"/>}/>
          <Route exact path='/technology' element={<News   pageSize={5} country="us" category="technology"/>}/>
        </Routes>
      </Router>
    </div>
    </>
  );
}

export default App;
