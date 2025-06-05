import logo from './logo.svg';
import './App.css';
import Leftside from './components/Leftside';
import Middleside from './components/Middleside';
import RightSide from './components/rightSide';

function App() {
  return (
    <div className="App">
      <div className='leftSideHome'><Leftside/></div>
       <div className='Middleside'><Middleside/></div>
        <div className='rightside'><RightSide/></div>
      
    </div>
  );
}

export default App;
