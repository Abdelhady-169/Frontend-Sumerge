import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from "@angular/router";
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { LoginComponent } from './login/login.component';
import { CatalogListComponent } from './main/catalog-list/catalog-list.component';
import { DetailsComponent } from './main/details/details.component';
import { MovieComponent } from './main/catalog-list/movie/movie.component';
import { FibberComponent } from './fibber/fibber.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { AuthGuard } from './auth-guard.service';
import { AuthService } from './auth-service';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    LoginComponent,
    CatalogListComponent,
    DetailsComponent,
    MovieComponent,
    NotfoundComponent,
  ],
  imports: [
    HttpClientModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [AuthGuard,AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
