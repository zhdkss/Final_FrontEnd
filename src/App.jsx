import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import { mainRoutes } from './router/index'; // Убедись, что экспорт называется mainRoutes
import './styles/global.css'; // Важно импортировать глобальные стили

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            {mainRoutes.map((route) => (
                <Route key={route.path} path={route.path} element={route.element} />
            ))}
            {/* <Route path="*" element={<NotFoundPage />} /> Позже добавим */}
          </Route>
        </Routes>
      </BrowserRouter>
  );
}

export default App;