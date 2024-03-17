import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EmployeeComponent } from './components/employee/employee.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EmployeeReducer } from './store/Employee/Employee.Reducer';
import { EmployeeEffects } from './store/Employee/Employee.Effect';
import { ToastrModule } from 'ngx-toastr';
import { NgxPaginationModule } from 'ngx-pagination';
import { ConfirmationPopoverModule } from 'angular-confirmation-popover';
@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({employee:EmployeeReducer}),
    EffectsModule.forRoot([EmployeeEffects]),
    StoreRouterConnectingModule.forRoot(),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
    NgSelectModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      positionClass:"toast-bottom-right",
      timeOut: 4000
    }),
    NgxPaginationModule,
    ConfirmationPopoverModule.forRoot({
      confirmButtonType: 'danger',
      popoverMessage:'Do you want to really delete?',
      popoverTitle:'Delete Confirmation'
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
