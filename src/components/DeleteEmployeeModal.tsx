import React from 'react'
import './DeleteEmployeeModal.css'
const DeleteEmployeeModal = ({handleDelete, setOpenDeleteEmpModal, empName}) => {
  return (
    <div className="delete-container">
        <div className="content">
            <h3>Are you sure you want to delete {empName} ?</h3>
        </div>
        <div className="deleteBtnContainer">
            <button onClick={handleDelete} className='yes-btn'>Yes</button>
            <button onClick={() => setOpenDeleteEmpModal(false)} className='no-btn'>No</button>
        </div>
    </div>
  )
}

export default DeleteEmployeeModal