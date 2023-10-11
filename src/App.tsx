import React from 'react';
import Layout from './components/Layout';
import { Navigate, Route, Routes } from 'react-router-dom';
import HomePage from './pages/home';
import { useSelector } from 'react-redux';
import { RootState } from './store';
import SharePage from './pages/share';
import LoginPage from './pages/login';
import RegisterPage from './pages/register';

function App() {
  const isLoggedIn = useSelector((state: RootState) => state.auth.accessToken);
  return (
    <Layout>
      <Routes>
        {isLoggedIn ? (
          <Route index element={<HomePage />} />
        ) : null}

        {isLoggedIn ? (
          <Route path="/share" element={<SharePage />} />
        ) : null}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />

        {isLoggedIn
          ?
          <Route path="*" element={<Navigate to="/" />} />
          :
          <Route path="*" element={<Navigate to="/login" />} />
        }
      </Routes>
    </Layout>
  );
}

export default App;
