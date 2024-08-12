import React from 'react'
import { useForm, FieldValues } from 'react-hook-form'
import { useAppDispatch, useAppSelector } from '../app/hooks.ts'
import { addEmployee, editEmployee } from '../features/Employee/employeeSlice.ts'
import { Employee } from './Employee'
import { useNavigate } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import './EmployeeForm.css'

const EmployeeForm = ({task}) => {
    const employeeList = useAppSelector(state => state.employee)
    
    const {id} = useParams()
    const currentEmp = employeeList.find((emp) => emp.id === id)
    
    const {
        register,
        handleSubmit,
        formState: {errors, isSubmitting},
        reset
    } = useForm({
        defaultValues: {
          fullName: currentEmp ? currentEmp.fullName : '',
          birthDate : currentEmp ? currentEmp.birthDate : '',
          department : currentEmp ? currentEmp.department : '',
          experience : currentEmp ? currentEmp.experience : ''
        }
      })

    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    const AddEmployee = (data) => {
        let emp : Employee = {
        id: '',
        fullName: data.fullName,
        birthDate: data.birthDate,
        department: data.department,
        experience: data.experience
      }
      console.log(emp);
      dispatch(addEmployee(emp))
      alert("Employee added successfully !")
      navigate("/")
      reset()
    }

    const EditEmployee = (data) => {
        let emp : Employee = {
            id: currentEmp ? currentEmp.id : "",
            fullName: data.fullName,
            birthDate: data.birthDate,
            department: data.department,
            experience: data.experience
          }
          dispatch(editEmployee(emp))
          alert("Employee details changed successfully !")
          navigate("/")
    }

    const containsOnlyLetters = (str) => {
        // Regular expression to match only letters A-Z (both uppercase and lowercase)
        const regex = /^[A-Za-z]+$/;
        
        // Test the string against the regular expression
        return regex.test(str);
    }

    const onSubmit = (data : FieldValues) => {
        if(task === 'Add') {
            AddEmployee(data)
        }
        else if(task === 'Edit') {
            EditEmployee(data)
        }
    }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='addNewEmployeeForm'>
        <div className="fullName inputbox">
        <label htmlFor="fullName">FullName: </label>
        <input 
          {...register('fullName', {
            validate: (value) => containsOnlyLetters(value) || "Invalid String, It should only contain letters, no spaces allowed"
          })}
          type="text" 
          placeholder='Enter Your Full Name...' 
          id='fullName'  
        />
        {errors.fullName && (
            <p style={{color: 'red', padding: '5px', backgroundColor: 'white'}}>{errors.fullName.message}</p>
        )}
      </div>

      <div className="birthDate inputbox">
      <label htmlFor="birthDate">Date of Birth: </label>
      <input type="date" 
      {...register('birthDate')}
       />
      </div>

      <div className="department inputbox">
        <label htmlFor="dept">Department: </label>
        <input 
        {...register('department')}
        type="text" 
        placeholder='Enter Your Department...' 
        id='dept' 
        />
      </div>

      <div className="experience inputbox">
        <label htmlFor="exp">Experience (in years) : </label>
        <input 
        {...register('experience')}
        type="number" 
        id='exp'
        />
      </div>
      <button type="submit" disabled={isSubmitting}>{task}</button>
      <button onClick={() => navigate('/')}>Cancel</button>
    </form>
  )
}

export default EmployeeForm