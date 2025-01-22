import { Routes, Route, Navigate, Outlet } from 'react-router-dom';
import Login from './pages/Login';
import DragonsList from '@pages/Dragon';
import { useAppSelector } from '@hooks/useRedux';

function App() {
  const isAuthenticated = useAppSelector((state) => state.user.isAuthenticated)

  const ProtectedRoute = () => {
    return isAuthenticated ? <Outlet /> : <Navigate to="/login" replace />;
  };

  return (
    <div>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route element={<ProtectedRoute />}>
          <Route path="/dragons" element={<DragonsList />} />
          {/* <Route path="/dragons/add" element={<DragonDetails />} /> */}
        </Route>
      </Routes>
    </div>
  );
}


export default App
