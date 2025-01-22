import { Routes, Route, Navigate, Outlet } from 'react-router-dom';
import Login from './pages/Login';
import DragonsList from '@pages/Dragon';
import { useAppSelector } from '@hooks/useRedux';
import DragonDetails from '@pages/Dragon/Details';
import AddDragon from '@pages/Dragon/Add';
import EditDragon from '@pages/Dragon/Edit';

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
          <Route path="/dragon/:id" element={<DragonDetails />} />
          <Route path="/dragon/add" element={<AddDragon />} />
          <Route path="/dragon/edit/:id" element={<EditDragon />} />
          <Route path="*" element={<Navigate to="/login" replace />} />
        </Route>
      </Routes>
    </div>
  );
}


export default App
