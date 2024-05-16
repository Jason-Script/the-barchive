import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

/**
 * This is the main Routing page. We will define our links to our main pages here.
 * Pages like Home, Recipes, Blog, Profile, Admin will be defined here with a Path, and linked
 * to their modules/components.
 */

const routes: Routes = [
    //This is the default route. Since we have a home page that should be displayed by default, it is set
    //to automatically redirect to the Home page.
  {
    path: '',
    pathMatch: 'prefix',
    redirectTo: 'Home',
  },
  //Here is where we define our route to the Home page.
  //We set the path with a custom name, then import the module file to point to the Home page's content.
  {
    path: 'Home',
    loadChildren: () =>
      import('./home//home/home-routing.module').then((m) => m.HomeRoutingModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
