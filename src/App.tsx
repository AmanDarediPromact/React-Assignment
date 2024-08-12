import React from "react"
import './App.css';
import { Routes, Route } from 'react-router-dom';
import ListEmployees from './pages/ListEmployees.tsx';
import EmployeeForm from "./components/EmployeeForm.tsx";

function App() {
  return (
    
    <Routes>
      <Route path="/" element={<ListEmployees />} />
      <Route path="/add" element={<EmployeeForm task={'Add'} />} />
      <Route path="/edit/:id" element={<EmployeeForm task={'Edit'} />} />
    </Routes>
    
  );
}

export default App;
