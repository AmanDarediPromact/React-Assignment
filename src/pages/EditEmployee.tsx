import React, {useEffect, useState} from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useAppSelector, useAppDispatch } from '../app/hooks.ts'
import { Employee } from '../components/Employee.tsx'
import { editEmployee } from '../features/Employee/employeeSlice.ts'
import "./EditEmployee.css"


const EditEmployee = () => {
 const {id} = useParams()
 const employeeList = useAppSelector(state => state.employee)
 const dispatch = useAppDispatch()
 const navigate = useNavigate()
 const currentEmp = employeeList.find((emp) => emp.id === id)

 const [fullName, setFullName] = useState(currentEmp ? currentEmp.fullName : "")
 const [birthDate, setBirthDate] = useState(currentEmp ? currentEmp.birthDate : "")
 const [department, setDepartment] = useState(currentEmp ? currentEmp.department : "")
 const [experience, setExperience] = useState(currentEmp ? currentEmp.experience : 0)

 const handleEditEmployee = () => {
  let emp : Employee = {
    id: currentEmp ? currentEmp.id : "",
    fullName,
    birthDate,
    department,
    experience
  }
  dispatch(editEmployee(emp))
  navigate("/")  
 }

 const handleCancel = () => {
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
      <button type="submit" onClick={handleEditEmployee}>Edit</button>
      <button onClick={handleCancel}>Cancel</button>
    </form>
    </div>
  )
}

export default EditEmployee