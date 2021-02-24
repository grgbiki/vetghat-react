import { BrowserRouter as Router, Route } from 'react-router-dom';

import Header from './components/Header'
import HomePage from './pages/home/HomePage'
import ExplorePage from './pages/explore/ExplorePage'


function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <div className="container">
          <Route path="/" exact component={HomePage} />
          <Route path="/explore" component={ExplorePage} />
        </div>
      </Router>
    </div>
  );
}

export default App;
