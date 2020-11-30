import { Header } from './Components/Menu/Header'
import { Route } from 'react-router-dom'
import NewsList from './Components/News/NewsList'
import { HomePage } from './Components/HomePage/HomePage'
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Route path='/news' component={ NewsList } />
      <Route path='/' component={ HomePage } />
    </div>
  );
}

export default App;
