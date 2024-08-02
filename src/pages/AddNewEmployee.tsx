import React, { useState, useEffect } from 'react'
import "./AddNewEmployee.css"

import {Employee} from "../components/Employee.tsx"
import { useAppSelector, useAppDispatch } from '../app/hooks.ts'
import { addEmployee } from '../features/Employee/employeeSlice.ts'
import { useNavigate } from 'react-router-dom'


const AddNewEmployee = () => {
  const [fullName, setFullName] = useState('')
  const [birthDate, setBirthDate] = useState('')
  const [department, setDepartment] = useState('')
  const [experience, setExperience] = useState(0)

  const employeeList = useAppSelector(state => state.employee)
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const handleAddEmployee = () => {
    let emp : Employee = {
      id: '',
      fullName,
      birthDate,
      department,
      experience
    }
    console.log(emp);
    dispatch(addEmployee(emp))
    navigate("/")
  }

  return (
    <div className="formContainer">
    <form action="" className='addNewEmployeeForm' onSubmit={(e) => e.preventDefault()}>
      <div className="fullName inputbox">
        <label htmlFor="fullName">FullName: </label>
        <input type="text" 
          placeholder='Enter Your Full Name...' 
          id='fullName'  
          value={fullName} 
          onChange={(e) =>setFullName(e.target.value)} />
      </div>

      <div className="birthDate inputbox">
      <label htmlFor="birthDate">Date of Birth: </label>
      <input type="date" 
        value={birthDate} 
        onChange={(e) => setBirthDate(e.target.value)} />
      </div>

      <div className="department inputbox">
        <label htmlFor="dept">Department: </label>
        <input type="text" 
        placeholder='Enter Your Department...' 
        id='dept' 
        value={department}
        onChange={(e) => setDepartment(e.target.value)}
        />
      </div>

      <div className="experience inputbox">
        <label htmlFor="exp">Experience (in years) : </label>
        <input type="number" 
        id='exp'
        value={experience}
        onChange={(e) => setExperience(parseInt(e.target.value))}
        />
      </div>
      <button type="submit" onClick={handleAddEmployee}>Add</button>
    </form>
    </div>
  )
}

export default AddNewEmployee