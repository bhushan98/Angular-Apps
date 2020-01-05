import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { AddComponent } from '../add/add.component';
import { ListComponent } from '../list/list.component';
import { SearchComponent } from '../search/search.component';
import { SortComponent } from '../sort/sort.component';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  {path:'', redirectTo:'/home', pathMatch:'full'},
  {path:'home', component:HomeComponent},
  {path:'add', component:AddComponent},
  {path:'list', component:ListComponent},
  {path:'search', component:SearchComponent},
  {path:'sort', component:SortComponent},
  {path:'**', redirectTo:'/home', pathMatch:'full'}
];



@NgModule({
  imports: [
    CommonModule, RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class NaviRoutingModule { }
