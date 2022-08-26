import './App.css';
import { Link } from 'react-router-dom';

function App() {
  return (
      <div className="main">
        <h2 className="main-header">CRUD</h2>
        <div>
        <Link to='/create'>
        <button type="button" class="btn btn-primary">Crear</button>
        </Link>
        </div>
      </div>
  );
}

export default App;