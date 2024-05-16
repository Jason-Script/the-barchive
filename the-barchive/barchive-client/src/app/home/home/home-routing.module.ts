/**
 * This is where we set up redirect links that will be on the homepage.
 * For example, if clicking a button took up to a Blog page, we'd attach the link here.
 */

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home.component';

// Angular's built in Routes object will do all the heavy work, we just have to prove the links.
const routes: Routes = [
  //Since the home page will be the default screen, we don't need to provide a link for it.
  {
    path: '',
    component: HomeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
