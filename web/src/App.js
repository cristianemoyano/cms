import './App.css';
import { Link } from 'react-router-dom';

function App() {
  return (
      <div className="main">
        <h2 className="main-header">React Crud Operations</h2>
        <div>
        <Link to='/create'>
          <button>Create</button>
        </Link>
        </div>
      </div>
  );
}

export default App;