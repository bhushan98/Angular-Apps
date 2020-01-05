import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AddComponent } from './add/add.component';
import { ListComponent } from './list/list.component';
import { FindComponent } from './find/find.component';
import { AppRoutingModule } from './app/app-routing.module';
import { FormsModule } from '@angular/forms'
 
@NgModule({
  declarations: [
    AppComponent,
    AddComponent,
    ListComponent,
    FindComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
