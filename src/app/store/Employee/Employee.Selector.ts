import { createFeatureSelector, createSelector } from "@ngrx/store";
import { EmployeeModel } from "../models/Employee.model";

const getEmployeeState = createFeatureSelector<EmployeeModel>('employee');


export const getEmployeeList = createSelector(getEmployeeState, (state) => {
    return state.list;
})

export const getEmployee = createSelector(getEmployeeState, (state) => {
    return state.employeeobj;
})