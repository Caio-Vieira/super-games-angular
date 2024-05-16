import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './shared/menu/menu.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { SuperCourtComponent } from './pages/super-court/super-court.component';
import { SuperCornerComponent } from './pages/super-corner/super-corner.component';
import { SuperMegaComponent } from './pages/super-mega/super-mega.component';
import { MenuModalComponent } from './shared/menu-modal/menu-modal.component';
import { AboutComponent } from './pages/about/about.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';




@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    FooterComponent,
    HomeComponent,
    SuperCourtComponent,
    SuperCornerComponent,
    SuperMegaComponent,
    MenuModalComponent,
    AboutComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule

  ],
  providers: [],
  bootstrap: [AppComponent],


})
export class AppModule { }
