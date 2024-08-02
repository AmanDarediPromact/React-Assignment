import React from 'react'
import Employee from '../components/Employee.tsx'
import "./ListEmployees.css"
import { useNavigate } from 'react-router-dom'
import { useAppSelector, useAppDispatch } from '../app/hooks.ts'

const ListEmployees = () => {

  const employeeList = useAppSelector(state => state.employee)
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const handleAddNewEmployee = () => {
    navigate("/add")
  }

  return (
    <>
    <h1 className="heading">List of Employees</h1>
    <div className="btnContainer">
    <button className="addNewEmp" onClick={handleAddNewEmployee}>Add New Employee</button>
    </div>
    {employeeList.map(emp => <Employee key={emp.id} id = {emp.id} fullName= {emp.fullName} birthDate= {emp.birthDate} department= {emp.department} experience={emp.experience} />)}
    </>
  )
}

export default ListEmployees