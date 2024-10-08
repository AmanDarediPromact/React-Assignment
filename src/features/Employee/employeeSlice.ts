import {createSlice, PayloadAction, nanoid} from "@reduxjs/toolkit"
import { current } from '@reduxjs/toolkit';

type Employee = {
    id: string,
    fullName: string,
    birthDate: string,
    department: string,
    experience: number
}

const empList = localStorage.getItem('empList')
const employeeList = empList ? JSON.parse(empList) : null

const initialState : Employee[] = employeeList ? employeeList : []
// console.log(initialState)
const employeeSlice = createSlice({
    name: "employee",
    initialState,
    reducers:{

        addEmployee : (state, action : PayloadAction<Employee>) => {
            // Creating new Employee to add in the list
            let emp : Employee = {
                ...action.payload, id: nanoid()
            }
            state.push(emp)
            localStorage.setItem('empList', JSON.stringify(state))
        },
        
        editEmployee : (state, action : PayloadAction<Employee>) => {
            let employeeIds: string[] = state.map(emp => emp.id)
            let index: number = employeeIds.indexOf(action.payload.id)
            if(index > -1) {
                state[index].fullName = action.payload.fullName
                state[index].birthDate = action.payload.birthDate
                state[index].department = action.payload.department
                state[index].experience = action.payload.experience
            }
            localStorage.setItem('empList', JSON.stringify(state))
        },

        deleteEmployee : (state, action : PayloadAction<string>) => {
            state = state.filter(emp => emp.id !== action.payload)
            localStorage.setItem('empList', JSON.stringify(state))
            return state
        }
    }
})

export default employeeSlice.reducer
export const {addEmployee, editEmployee, deleteEmployee} = employeeSlice.actions