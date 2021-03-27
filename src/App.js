import './App.css';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom'
import Tabs from './components/Navbar/Tabs'

function App() {
  return (
    <div className="App">
        <Tabs/>
    </div>
  );
}

export default App;
