// -[ ] /showcase/profile -> for more info about the project?
import { Home, Showcase } from './pages';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className=''>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/showcase' component={Showcase} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
