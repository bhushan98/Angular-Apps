import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddComponent } from '../add/add.component';
import { ListComponent } from '../list/list.component';
import { FindComponent } from '../find/find.component';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  {path:'', redirectTo:'/add', pathMatch:'full'},
  {path:'add', component:AddComponent},
  {path:'list', component:ListComponent},
  {path:'find', component:FindComponent},
  {path:'**', redirectTo:'/add', pathMatch:'full'}
];

@NgModule({
  imports: [
    CommonModule, RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
