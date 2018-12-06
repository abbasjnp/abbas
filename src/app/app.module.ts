import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{FormsModule} from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HeroesComponent} from './heroes/heroes.component';
import{HeroDetailComponent} from './hero-detail/hero-detail.component';
import{DashboardComponent} from './dashboard/dashboard.component';
import{HttpClientModule} from '@angular/common/http';
import{HeroService} from './hero.service';
import{ HeroTableComponent } from './hero-table/hero-table.component'

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    DashboardComponent,
    HeroTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [HeroService],
  bootstrap: [AppComponent]
})
export class AppModule { }
