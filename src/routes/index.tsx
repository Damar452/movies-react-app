import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/home/Home";
import MovieDetail from '../pages/MovieDetail/MovieDetail';

const AppRoutes = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/movie/:id" element={<MovieDetail />} />
    </Routes>
  </Router>
);

export default AppRoutes;