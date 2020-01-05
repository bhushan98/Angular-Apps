import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchComponent } from '../search/search.component';
import { ListComponent } from '../list/list.component';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  {path:'',redirectTo:'/search',pathMatch:'full'},
  {path:'search', component:SearchComponent},
  {path:'list', component:ListComponent},
  {path:'**', redirectTo:'/search', pathMatch:'full'}
];

@NgModule({
  imports: [
    CommonModule,RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class NaviRoutingModule { }
