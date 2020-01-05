import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AddComponent } from './add/add.component';
import { HomeComponent } from './home/home.component';
import { ListComponent } from './list/list.component';
import { SearchComponent } from './search/search.component';
import { SortComponent } from './sort/sort.component';
import { NaviRoutingModule } from './navi/navi-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    AddComponent,
    HomeComponent,
    ListComponent,
    SearchComponent,
    SortComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NaviRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
