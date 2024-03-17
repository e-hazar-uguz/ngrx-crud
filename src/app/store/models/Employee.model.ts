export interface Employees{
    id:number,
    name:string,
    email:string,
    phone:string,
    type:string,
    address:string,
    employee_group:string,
    status:boolean
}

export interface EmployeeModel{
    list:Employees[],
    employeeobj:Employees,
    errormessage:string
}