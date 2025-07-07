import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { MainDashComponent } from './pages/main-dash/main-dash.component';
import { SignInComponent } from './pages/sign-in/sign-in.component';

@NgModule({
  declarations: [AppComponent, SideBarComponent, MainDashComponent, SignInComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
