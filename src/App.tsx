import React from 'react';
import Layout from './components/layout';
import { Navigate, Route, Routes } from 'react-router-dom';
import HomePage from './pages/home';
import Page2 from './pages/page2';
import { useSelector } from 'react-redux';
import { RootState } from './store';

function App() {
  const isLoggedIn = useSelector((state: RootState) => state.auth.accessToken);
  return (
    <Layout>
      <Routes>
        <Route index element={<HomePage />} />
        {isLoggedIn ? (
          <Route path="/page2" element={<Page2 />} />
        ) : null}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Layout>
  );
}

export default App;
