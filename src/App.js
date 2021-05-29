
import './assets/scss/base.scss';
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom'

import Home from './pages/home'
import Details from './pages/details'
import Navigation from './components/Navigation.js'

function App() {
  return (
    <div className="page-container">
    <div className="content-wrap">
        <Router>
            <div className="App">
                <Navigation />
                <Switch>
                    <Route path="/home" component={Home} />
                    <Route path="/details" component={Details} />
                    <Route path="/" render={() => <Redirect to="/home" />} />
                    <Route component={() => 404} />
                </Switch>
            </div>
        </Router>
    </div>
    </div>
  );
}

export default App;
