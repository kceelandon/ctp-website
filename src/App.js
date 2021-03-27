import './App.css';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom'
import Tabs from './components/Navbar/Tabs'

function App() {
  return (
    <div className="App">
        <Tabs/>
        <Router>
          <Route path="/">
            {/* insert home page component(s) here */}
          </Route>
          <Route path="/about">
            {/* insert about page component(s) here */}
          </Route>
          <Route path="/recruitment">
            {/* insert recruitment page component(s) here */}
          </Route>
          <Route path="/philanthropy">
            {/* insert philanthropy page component(s) here */}
          </Route>
        </Router>
    </div>
  );
}

export default App;
