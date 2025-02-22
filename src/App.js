import './App.css';
import Navbar from './component/navbar'
import Edit from './component/edit';
import { createBrowserRouter } from 'react-router-dom';
function App() {
let router = createBrowserRouter([
  {
    path:"/",
    element: <Edit/>
  }
])

  return (
    <div>
      <Navbar></Navbar>
      <Edit/>
    </div>
  );
}

export default App;
