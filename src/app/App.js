import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from '../components/Header';
import { CounterClass } from '../components/CounterClass';
import { CounterFunction } from '../components/CounterFunction';
import { Provider } from 'react-redux';
import { CounterRedux } from '../components/CounterRedux';
import { CounterImmer } from '../components/CounterImmer';

function App() {
  return (
    <Router>
      <Switch>
        <main className="grid wide">  
          <Header />
          <Route exact path='/counter-class'>
            <CounterClass />
          </Route>
          <Route exact path='/counter-function'>
            <CounterFunction />
          </Route>
          <Route exact path='/counter-redux'>
            <CounterRedux />
          </Route>
          <Route exact path='/counter-immer'>
            <CounterImmer />
          </Route>
        </main>
      </Switch>
    </Router>
  )
}

export default App;
