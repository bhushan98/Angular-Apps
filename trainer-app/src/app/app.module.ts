import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AddComponent } from './add/add.component';
import { ListComponent } from './list/list.component';
import { SearchComponent } from './search/search.component';
import { NaviRoutingModule } from './navi/navi-routing.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AddComponent,
    ListComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    NaviRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
