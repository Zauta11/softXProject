import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SigninComponent } from './pages/signin/signin.component';
import { AuthGuard } from './core/auth/auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'users',
    pathMatch: 'full'
  },
  {
    path: 'users',
    canActivate: [ AuthGuard ],
    loadChildren: () => import ('./pages/users/users.module').then(m => m.UsersModule)
  },
  {
    path: 'signin',
    component: SigninComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
