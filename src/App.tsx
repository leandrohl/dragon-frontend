import { Routes, Route } from 'react-router-dom';
import Login from './pages/Login';

function App() {
  // const PrivateRoute = ({ children }: { children: JSX.Element }) => {
  //   return children;
  // }


  return (
    <div>
      <Routes>
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}


export default App
