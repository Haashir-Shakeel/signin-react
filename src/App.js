
import './App.css';
import { Form } from './components/form';

import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
function App() {
  return (
    <Router>
    <div className="App">
      <Form></Form>
    </div>
    </Router>
  );
}

export default App;
