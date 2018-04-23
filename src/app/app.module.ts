import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { MainManagerComponent } from './main-manager/main-manager.component';
import { MainComponent } from './main/main.component';
import {RouterModule} from '@angular/router';
import {AppRoutingModule} from './app-routing.module';
import {HttpClientModule} from '@angular/common/http';
import {StreamDataService} from './stream-data.service';
import {AccessGuard} from './access.guard';


@NgModule({
  declarations: [
    AppComponent,
    MainManagerComponent,
    MainComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule
  ],
  providers: [StreamDataService, AccessGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
