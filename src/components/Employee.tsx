import React, {useState} from 'react'
import "./Employee.css"

import { useAppDispatch } from '../app/hooks.ts'
import { deleteEmployee } from '../features/Employee/employeeSlice.ts'
import { addEmployee } from '../features/Employee/employeeSlice.ts'
import { useNavigate } from 'react-router-dom'
import DeleteEmployeeModal from './DeleteEmployeeModal.tsx'

export type Employee = {
    id: string,
    fullName: string,
    birthDate: string,
    department: string,
    experience: number
}

const Employee = ({id, fullName, birthDate, department, experience} : Employee) => {
    const [openDeleteEmpModal, setOpenDeleteEmpModal] = useState(false)

    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    const handleDelete = () => {
        console.log("delete button clicked", {fullName})
        dispatch(deleteEmployee(id))
    }

    const handleEdit = () => {
        navigate(`/edit/${id}`)
    }
    
  return (
    <div className="container">
    <div className="employee">
        <p>{fullName}</p>
        <p>{birthDate}</p>
        <p>{department}</p>
        <p>{experience}</p>
    </div>
    <div className="btns">
        <button onClick={handleEdit}>Edit</button>
        <button onClick={() => setOpenDeleteEmpModal(true)}>Delete</button>
        {openDeleteEmpModal && <DeleteEmployeeModal handleDelete={handleDelete} setOpenDeleteEmpModal={setOpenDeleteEmpModal} empName={fullName} />}
    </div>
    </div>
  )
}

export default Employee