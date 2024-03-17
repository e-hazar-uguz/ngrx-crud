import { createReducer, on } from "@ngrx/store";
import { EmployeeState } from "./Employee.State";
import { addEmployeeSuccess, deleteEmployeeSuccess, getEmployeeSuccess, loadEmployeeFail, loadEmployeeSuccess, updateEmployeeSuccess } from "./Employee.Action";

const _EmployeeReducer = createReducer(EmployeeState,
    on(loadEmployeeSuccess, (state, action) => {
        return {
            ...state,
            list: [...action.list],
            errormessage: ''
        }
    }),
    on(loadEmployeeFail, (state, action) => {
        return {
            ...state,
            list: [],
            errormessage: action.errormessage
        }
    }),
    on(getEmployeeSuccess, (state, action) => {
        return {
            ...state,
            employeeobj: action.obj,
            errormessage: ''
        }
    }),
    on(addEmployeeSuccess, (state, action) => {
        const _maxid = Math.max(...state.list.map(o => o.id));
        const _newdata = { ...action.inputdata };
        _newdata.id = _maxid + 1;
        return {
            ...state,
            list: [...state.list, _newdata],
            errormessage: ''
        }
    }),
    on(updateEmployeeSuccess, (state, action) => {
        const _newdata = state.list.map(o => {
            return o.id === action.inputdata.id ? action.inputdata : o
        })
        return {
            ...state,
            list: _newdata,
            errormessage: ''
        }
    }),
    on(deleteEmployeeSuccess, (state, action) => {
        const _newdata = state.list.filter(o=>o.id!==action.code);
        return {
            ...state,
            list: _newdata,
            errormessage: ''
        }
    })
)

export function  EmployeeReducer(state: any, action: any) {
    return _EmployeeReducer(state, action);
}