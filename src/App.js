
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './App.css';
import {Component} from 'react';
import SearchTab from './components/SearchTab.js';
import Home from './components/Home.js';
import SearchResult from './components/SearchResult.js';
class App extends Component{
  constructor(props){
    super(props)
    this.state={
    }
  }
  render(){
    return(
      <div id='App'>
          <BrowserRouter>
              <SearchTab/>
              <Routes>
                  <Route path='/' element={<Home/>}/>
                  <Route path='/search' element={<SearchResult/>}/>
              </Routes>
          </BrowserRouter>
      </div>
    )
  }
}
export default App;
