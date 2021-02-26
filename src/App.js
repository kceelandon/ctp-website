import './App.css';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Recruitment from './pages/Recruitment'
import Philanthropy from './pages/Philanthropy'
import Contact from './pages/Contact'
import Tabs from './components/Tabs'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Tabs/>
      </header>
    </div>
  );
}

export default App;
