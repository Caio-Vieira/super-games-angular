import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SuperCornerComponent } from './pages/super-corner/super-corner.component';
import { SuperCourtComponent } from './pages/super-court/super-court.component';
import { SuperMegaComponent } from './pages/super-mega/super-mega.component';
import { AboutComponent } from './pages/about/about.component';


const routes: Routes = [
  {path: '', component: HomeComponent, pathMatch: 'full', data: {animation: 'HomePage'}},
  {path:'super-mega', component: SuperMegaComponent, data: {animation: 'SuperMegaPage'}},
  {path:'super-corner', component:SuperCornerComponent, data: {animation: 'SuperCornerPage'}},
  {path:'super-court', component: SuperCourtComponent, data: {animation: 'SuperCourtPage'}},
  {path:'about', component: AboutComponent, data: {animation: 'AboutPage'}},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
