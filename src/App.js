import './App.css';

import Header from './components/Header';
import Stopka from './components/Stopka';

import { GlobalStyle } from './GlobalStyles';
import {BrowserRouter as Router, Link, Switch, Route} from "react-router-dom";

import Home from './components/Home';

const App = () => (
    <Router>
        <Header />
        <Home />
        <Stopka />
        <GlobalStyle />
    </Router>
);

export default App;
