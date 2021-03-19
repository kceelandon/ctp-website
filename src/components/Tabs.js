import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Home from '../pages/Home'
import About from '../pages/About'
import Recruitment from '../pages/Recruitment'
import Contact from '../pages/Contact'
import Philanthropy from '../pages/Philanthropy'
import '../styles/Tabs.css'
import '../index.css'

function Tabs(props) {
    /* TODO:
        1. bootstrap styling is at a default. need to fix later on in development
        2. insert logo within Navbar.Brand component
    */
    return (
        <div>
            <div className="row">
                <div className="col-md-12">
                    <Router>
                        <Navbar style={{backgroundColor: '#F8BC31'}} variant="dark" fixed="top">
                            <Navbar.Brand style={{color: '#3F3939', fontFamily: 'Nobel'}} href="/">Chi Theta Psi</Navbar.Brand>
                            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                            <Navbar.Collapse id="basic-navbar-nav">
                                <Nav className="m-auto">
                                    <Nav.Link className="mr-2" style={{color: '#3F3939'}} href="/">Home</Nav.Link>
                                    <Nav.Link className="mr-2" style={{color: '#3F3939'}} href="/about">About Us</Nav.Link>
                                    <Nav.Link className="mr-2" style={{color: '#3F3939'}} href="/recruitment">Recruitment</Nav.Link>
                                    <Nav.Link className="mr-2" style={{color: '#3F3939'}} href="/philanthropy">Philanthropy</Nav.Link>
                                    <Nav.Link style={{color: '#3F3939'}} href="/contact">Contact Us</Nav.Link>
                                </Nav>
                            </Navbar.Collapse>
                        </Navbar>
                        <br/>
                        <Switch>
                            <Route exact path="/">
                                <Home />
                            </Route>
                            <Route path="/about">
                                <About/>
                            </Route>
                            <Route path="/recruitment">
                                <Recruitment/>
                            </Route>
                            <Route path="/philanthropy">
                                <Philanthropy/>
                            </Route>
                            <Route path="/contact">
                                <Contact/>
                            </Route>
                        </Switch>
                    </Router>
                </div>
            </div>
            
        </div>   
    );
}

export default Tabs;