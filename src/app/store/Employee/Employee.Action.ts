import { createAction, props } from "@ngrx/store"
import { Employees } from "../models/Employee.model"

export const LOAD_EMPLOYEE='[employee page]load employee'
export const LOAD_EMPLOYEE_SUCCESS='[employee page]load employee success'
export const LOAD_EMPLOYEE_FAIL='[employee page]load employee fail'

export const GET_EMPLOYEE='[employee page]get employee'
export const GET_EMPLOYEE_SUCCESS='[employee page]get employee success'
export const GET_EMPLOYEE_FAIL='[employee page]get employee fail'

export const ADD_EMPLOYEE='[associate page]add employee'
export const ADD_EMPLOYEE_SUCCESS='[associate page]add employee success'
export const ADD_EMPLOYEE_FAIL='[employee page]add employee fail'

export const UPDATE_EMPLOYEE='[associate page]update employee'
export const UPDATE_EMPLOYEE_SUCCESS='[associate page]update employee success'
export const UPDATE_EMPLOYEE_FAIL='[employee page]update employee fail'

export const DELETE_EMPLOYEE='[associate page]delete employee'
export const DELETE_EMPLOYEE_SUCCESS='[associate page]delete employee success'
export const DELETE_EMPLOYEE_FAIL='[employee page]update employee fail'

export const loadEmployee=createAction(LOAD_EMPLOYEE)
export const loadEmployeeSuccess=createAction(LOAD_EMPLOYEE_SUCCESS,props<{list:Employees[]}>())
export const loadEmployeeFail=createAction(LOAD_EMPLOYEE_FAIL,props<{errormessage:string}>())

export const getEmployeeAction=createAction(GET_EMPLOYEE,props<{id:number}>())
export const getEmployeeSuccess=createAction(GET_EMPLOYEE_SUCCESS,props<{obj:Employees}>())
export const getEmployeeFail=createAction(GET_EMPLOYEE_FAIL,props<{errormessage:string}>())

export const addEmployee=createAction(ADD_EMPLOYEE,props<{inputdata:Employees}>())
export const addEmployeeSuccess=createAction(ADD_EMPLOYEE_SUCCESS,props<{inputdata:Employees}>())
export const addEmployeeFail=createAction(ADD_EMPLOYEE_FAIL,props<{errormessage:string}>())

export const updateEmployee=createAction(UPDATE_EMPLOYEE,props<{inputdata:Employees}>())
export const updateEmployeeSuccess=createAction(UPDATE_EMPLOYEE_SUCCESS,props<{inputdata:Employees}>())
export const updateEmployeeFail=createAction(UPDATE_EMPLOYEE_FAIL,props<{errormessage:string}>())

export const deleteEmployee=createAction(DELETE_EMPLOYEE,props<{id:number}>())
export const deleteEmployeeSuccess=createAction(DELETE_EMPLOYEE_SUCCESS,props<{code:number}>())
export const deleteEmployeeFail=createAction(DELETE_EMPLOYEE_FAIL,props<{errormessage:string}>())