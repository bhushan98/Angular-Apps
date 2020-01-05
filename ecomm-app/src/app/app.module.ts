import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { ListComponent } from './list/list.component';
import { NaviRoutingModule } from './navi/navi-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    ListComponent
  ],
  imports: [
    BrowserModule,
    NaviRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
