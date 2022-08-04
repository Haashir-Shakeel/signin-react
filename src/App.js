import './App.css';
import { Form } from './components/form';

import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import { SemanticForm } from './components/semanticForm';
function App() {
  return (
    <Router>
    <div className="App">
      <Routes>
        <Route index element={<SemanticForm></SemanticForm>}/>
        <Route path='/Home' element={<div><h1>Home page</h1></div>}/>
      </Routes>
    </div>
    </Router>
  );
}

export default App;
