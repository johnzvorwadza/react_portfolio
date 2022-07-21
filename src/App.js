import { Route, BrowserRouter, Routes} from 'react-router-dom';
import './App2.css';
import HomepageContainer from './HomepageContainer';
import AboutpageContainer from './AboutpageContainer';
import ContactpageContainer from './ContactpageContainer';
import HomePage from './components/HomePage';

function App() {
  return (
    <div className="App">
     <HomePage/>
    </div>
  );
}

export default App;
