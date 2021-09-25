import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
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

const Routes: Routes =[
  { path:'' , component: FibberComponent},
  { path:'fibber' , component: FibberComponent},
  { path: 'login' , component: LoginComponent },
  { path: 'main' , canActivate:[AuthGuard] , component: MainComponent },
  { path: 'details' , canActivate:[AuthGuard] , component: DetailsComponent },
  { path: 'notfound' , component: NotfoundComponent},
  { path: '**' , redirectTo: '/notfound'},
];

@NgModule({
  imports: [RouterModule.forRoot(Routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})

export class AppRoutingModule { }
