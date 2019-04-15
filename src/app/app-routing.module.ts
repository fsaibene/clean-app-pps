import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: "", redirectTo: "login", pathMatch: "full" },
  {
    path: "login",
    loadChildren: "./login/login.module#LoginPageModule"
  },
  {
    path: "users",
    loadChildren: "./users/user-routing.module#UserRoutingModule"
  },
  {
    path: "menu",
    loadChildren: "./menu/menu.module#MenuPageModule"
  },
  { path: "home", loadChildren: "./home/home.module#HomePageModule" },
  {
    path: "register",
    loadChildren: "./register/register.module#RegisterPageModule"
  },
  { path: 'menu', loadChildren: './menu/menu.module#MenuPageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
