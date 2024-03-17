import { EmployeeModel } from "../models/Employee.model";

export const EmployeeState:EmployeeModel={
    list:[],
    errormessage:'',
    employeeobj:{
        id: 0,
        name: "",
        email: "",
        phone: "",
        type: "",
        address: "",
        employee_group: "",
        status: false
    }
}