import { Route, BrowserRouter, Routes} from 'react-router-dom';
import './App.css';
import HomepageContainer from './HomepageContainer';
import AboutpageContainer from './AboutpageContainer';
import ContactpageContainer from './ContactpageContainer';

function App() {
  return (
    <div className="App">
     <Routes>
    <Route path="/" element={<HomepageContainer/>}/>
    <Route path="/about" element={<AboutpageContainer/>}/>
    <Route path="/contact" element={<ContactpageContainer/>}/>
  </Routes>
    </div>
  );
}

export default App;
