import React from 'react';
import { Routes, Route, useLocation, Navigate } from 'react-router-dom';
import Home from './pages/Home';               // Only ONE slash here
import Login from './components/Login';
import Signup from './components/Signup';
import ResultPage from './pages/ResultPage';   // Only ONE slash here

// Private protected route
function RequireAuth({ children }) {
  // check localStorage (or change to token check / context)
  const isLoggedIn = Boolean(localStorage.getItem("authToken"));
  const location = useLocation();

  if (!isLoggedIn) {
    // send to login and store the attempted path in state
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
}

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/login' element={<Login />} />
      <Route path='/signup' element={<Signup />} />

      <Route path='/result' element={
        <RequireAuth>
          <ResultPage />
        </RequireAuth>
      } />
    </Routes>
  )
}

export default App