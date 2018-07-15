import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routing } from './RouteRepo';
import { JwtHelperService } from '@auth0/angular-jwt';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent  } from './profile/profile.component';
import { AuthService } from './services/auth.service';
import { AuthGuard } from './auth.guard';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    routing
  ],
  providers: [
      AuthService,
      JwtHelperService,
      AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
