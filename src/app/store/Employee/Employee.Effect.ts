import { Injectable } from "@angular/core"
import { Actions, createEffect, ofType } from "@ngrx/effects";

import { catchError, exhaustMap, of, map, switchMap } from "rxjs";
import { EmployeeService } from "src/app/services/employee.service";
import {  addEmployee, addEmployeeFail, addEmployeeSuccess, deleteEmployee, deleteEmployeeFail, deleteEmployeeSuccess, getEmployeeAction, getEmployeeFail, getEmployeeSuccess, loadEmployee, loadEmployeeFail, loadEmployeeSuccess, updateEmployee, updateEmployeeFail, updateEmployeeSuccess } from "./Employee.Action";
import { ToastrService } from "ngx-toastr";


@Injectable()
export class EmployeeEffects {
    constructor(private action$: Actions, private service: EmployeeService,private toastrService: ToastrService) {

    }

        _loadEmployee = createEffect(() =>
        this.action$.pipe(
            ofType(loadEmployee),
            exhaustMap((action) => {
                return this.service.GetAll().pipe(
                    map((data) => {
                        return loadEmployeeSuccess({ list: data })
                    }),
                    catchError((_error) => of(loadEmployeeFail({ errormessage: _error.message })))
                )
            })
        )
    )

    _getEmployee = createEffect(() =>
    this.action$.pipe(
        ofType(getEmployeeAction),
        exhaustMap((action) => {
            return this.service.GetbyId(action.id).pipe(
                map((data) => {
                    return getEmployeeSuccess({ obj: data })
                }),
                catchError((_error) => of(getEmployeeFail({ errormessage: _error.message })))
                
            )
        })
    )
)

_addEmployee = createEffect(() =>
  this.action$.pipe(
    ofType(addEmployee),
    switchMap((action) => {
      return this.service.CreateData(action.inputdata).pipe(
        switchMap((data) => {
          if (data) {
            this.toastrService.success('Employee added successfully!');
            return of(addEmployeeSuccess({ inputdata: action.inputdata }));
          } else {
            throw new Error('Failed to add employee'); 
          }
        }),
        catchError((_error) => {
            this.toastrService.error(_error.message, 'Error');
            return of(addEmployeeFail({ errormessage: _error.message }));
          })
      )
    })
  )
)


_updateEmployee = createEffect(() =>
  this.action$.pipe(
    ofType(updateEmployee),
    switchMap((action) => {
      return this.service.UpdateData(action.inputdata).pipe(
        switchMap((data) => {
          if (data) {
            this.toastrService.success('Employee updated successfully!');
            return of(updateEmployeeSuccess({ inputdata: action.inputdata }));
          } else {
            throw new Error('Failed to update employee'); 
          }
        }),
        catchError((_error) => {
          this.toastrService.error(_error.message, 'Error');
          return of(updateEmployeeFail({ errormessage: _error.message }));
        })
      )
    })
  )
)

_deleteEmployee = createEffect(() =>
  this.action$.pipe(
    ofType(deleteEmployee),
    switchMap((action) => {
      return this.service.DeleteData(action.id).pipe(
        switchMap((data) => {
          if (data) {
            this.toastrService.success('Employee deleted successfully!');
            return of(deleteEmployeeSuccess({ code: action.id }));
          } else {
            throw new Error('Failed to delete employee'); 
          }
        }),
        catchError((_error) => {
          this.toastrService.error(_error.message, 'Error');
          return of(deleteEmployeeFail({ errormessage: _error.message }));
        })
      );
    })
  )
);


}