
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Layout } from '../layout/Layout';

import { HomePage, LoginPage, PostDetailPage } from '../pages';
import { PublicRoute } from './PublicRoute';
import { PrivateRoute } from './PrivateRoute';



export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>

          <Route element={<PublicRoute />}>
            <Route path="login" element={<LoginPage />} />
          </Route>

          <Route element={<PrivateRoute />}>
            <Route path="/" element={<HomePage />} />
            <Route path="post/:id" element={<PostDetailPage />} />
          </Route>

          <Route path="*" element={<Navigate to="/login" />} />

        </Route>
      </Routes>
    </BrowserRouter>
  );
};
