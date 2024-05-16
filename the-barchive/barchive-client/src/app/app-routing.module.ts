import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    pathMatch: 'prefix',
    redirectTo: 'Home',
  },
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
