import { Route, BrowserRouter, Routes} from 'react-router-dom';
import './App.css';
import HomepageContainer from './HomepageContainer';
import AboutpageContainer from './AboutpageContainer';
import ContactpageContainer from './ContactpageContainer';

function App() {
  return (
    <div className="App">
     <HomepageContainer/>
    </div>
  );
}

export default App;
