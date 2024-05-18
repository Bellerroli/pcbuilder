import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {authGuard} from "./shared/services/auth.guard";

const routes: Routes = [{path: 'main', loadChildren: () => import('./pages/main/main.module').then(m => m.MainModule)},
  {path: 'parts', loadChildren: () => import('./pages/parts/parts.module').then(m => m.PartsModule)},
  {
    path: 'builder', loadChildren: () => import('./pages/builder/builder.module').then(m => m.BuilderModule),
    canActivate: [authGuard]
  },
  {path: '', redirectTo: '/main', pathMatch: 'full'},
  {path: 'not-found', loadChildren: () => import('./pages/not-found/not-found.module').then(m => m.NotFoundModule)},
  {path: 'login', loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule)},
  {path: 'signup', loadChildren: () => import('./pages/signup/signup.module').then(m => m.SignupModule)},
  {
    path: 'build', loadChildren: () => import('./pages/builds/builds.module').then(m => m.BuildsModule),
    canActivate: [authGuard]
  },
  {path: '**', redirectTo: '/not-found'}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
