import {NgModule} from '@angular/core';
import {LoginComponent} from './login/login.component';
import {SharedModule} from "../shared/shared.module";
import {RouterModule, Routes} from "@angular/router";


const authRoutes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
];

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    SharedModule,
    RouterModule.forChild(authRoutes),
  ], exports: [
    LoginComponent

  ]
})
export class AuthModule {
}
