import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import {
  addEmployee,
  deleteEmployee,
  getEmployeeAction,
  loadEmployee,
  updateEmployee,
} from 'src/app/store/Employee/Employee.Action';
import {
  getEmployee,
  getEmployeeList,
} from 'src/app/store/Employee/Employee.Selector';
import { Employees } from 'src/app/store/models/Employee.model';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
})
export class EmployeeComponent implements OnInit {
  title = 'Employee List';
  formValue!: FormGroup;
  employeeGroups = ['Level 1', 'Level 2', 'Level 3'];
  isNew = false;
  employeeData: any[] = [];
  pagedEmployeeData: any[] = [];
  page = 1;
  totalItems!: number;
  public cancelClicked = false;
  public confirmButtonType = 'dark';
  public cancelButtonType = 'danger';

  constructor(private formBuilder: FormBuilder, private store: Store) {
    this.createForm();
  }

  ngOnInit() {
    this.getAllEmployees();
  }

  createForm() {
    this.formValue = this.formBuilder.group({
      id: [0],
      name: ['', Validators.required],
      email: [''],
      phone: [''],
      address: [''],
      type: [''],
      employee_group: [''],
      status: [false],
    });
  }

  get name() {
    return this.formValue.get('name');
  }

  clickAddEmployee() {
    this.isNew = true;
  }

  getAllEmployees() {
    this.store.dispatch(loadEmployee());
    this.store.select(getEmployeeList).subscribe((res) => {
      if (res) {
        this.employeeData = res;
      }
    });
  }

  updateData(id: number) {
    this.isNew = false;
    this.store.dispatch(getEmployeeAction({ id: id }));
    this.store.select(getEmployee).subscribe((res) => {
      this.formValue.setValue({
        id: res.id,
        name: res.name,
        email: res.email,
        phone: res.phone,
        address: res.address,
        employee_group: res.employee_group,
        type: res.type,
        status: res.status,
      });
    });
  }

  saveChangeDatas() {
    if (this.formValue.valid) {
      const _obj: Employees = {
        id: this.formValue.value.id as number,
        name: this.formValue.value.name as string,
        email: this.formValue.value.email as string,
        phone: this.formValue.value.phone as string,
        employee_group: this.formValue.value.employee_group as string,
        address: this.formValue.value.address as string,
        type: this.formValue.value.type as string,
        status: this.formValue.value.status as boolean,
      };
      console.log(_obj)
      console.log(_obj.id)
      if (_obj.id === 0) {
        this.store.dispatch(addEmployee({ inputdata: _obj }));
      } else {
        this.store.dispatch(updateEmployee({ inputdata: _obj }));
      }
      this.cancel();
    
    }
  }

  deleteData(id: number) {
    this.store.dispatch(deleteEmployee({ id: id }));
  }

  cancel() {
    let ref = document.getElementById('cancel');
    ref?.click();
    this.formValue.reset();
  }

  pageChanged(event: any) {
    this.page = event;
    this.loadPage();
  }

  loadPage() {
    const startIndex = (this.page - 1) * 10;
    this.pagedEmployeeData = this.employeeData.slice(
      startIndex,
      startIndex + 10
    );
  }
}
