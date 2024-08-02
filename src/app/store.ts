import { configureStore } from "@reduxjs/toolkit";
import EmployeeReducer from "../features/Employee/employeeSlice.ts"

export const store = configureStore({
    reducer: {
        employee: EmployeeReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch