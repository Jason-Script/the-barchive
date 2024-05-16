/**
 * This is where we set up redirect links that will be subpages the home page.
 * The default page is /Home, i.e LocalHost:4200/Home. We could add additional subpaths to create LocalHost:4200/Home/Example
 */

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home.component';

// Angular's built in Routes object will do all the heavy work, we just have to prove the components.
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
