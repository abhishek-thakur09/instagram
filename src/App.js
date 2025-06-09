import logo from './logo.svg';
import './App.css';
import Leftside from './components/Leftside';
import Middleside from './components/Middleside';
import RightSide from './components/rightSide';

function App() {
  return (
    <div className="App">
      <div className='sidebar-left'><Leftside/></div>
       <div className='main-content'><Middleside/></div>
        <div className='sidebar-right'><RightSide/></div>
      
    </div>
  );
}

export default App;
