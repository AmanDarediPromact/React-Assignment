import React from "react"
import './App.css';
import { Routes, Route } from 'react-router-dom';
import ListEmployees from './pages/ListEmployees.tsx';
import AddNewEmployee from './pages/AddNewEmployee.tsx'
import EditEmployee from './pages/EditEmployee.tsx'

function App() {
  return (
    
    <Routes>
      <Route path="/" element={<ListEmployees />} />
      <Route path="/add" element={<AddNewEmployee />} />
      <Route path="/edit/:id" element={<EditEmployee />} />
    </Routes>
    
  );
}

export default App;
