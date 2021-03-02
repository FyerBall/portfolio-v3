import { Home, Showcase } from './pages';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className='container'>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/showcase' component={Showcase} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
