import { Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
// import { useAppSelector } from '@hooks/useRedux';

function App() {
  // const isAuthenticated = useAppSelector((state) => state.user.isAuthenticated)

  return (
    <div>
      <Routes>
        <Route path="/login" element={<Login />} />
        {/* <PrivateRoute path="/protected">
          <Login />
        </PrivateRoute> */}
      </Routes>
    </div>
  );
}


export default App
