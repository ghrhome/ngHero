import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HerosComponent } from "./heros/heros.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { HeroDetailComponent } from "./hero-detail/hero-detail.component";

const routes: Routes = [
  {
    path: 'heroes', component: HerosComponent
  },{
    path: 'dashboard', component: DashboardComponent
  },{
    path: 'detail/:id', component: HeroDetailComponent
  }, {
    path: "",component: HerosComponent, pathMatch: "full"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
