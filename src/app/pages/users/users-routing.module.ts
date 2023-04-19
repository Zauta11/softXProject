import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UsersComponent } from './users.component';
import { UserResolver } from './resolvers/user.resolver';

const routes: Routes = [
  {
    path: '',
    component: UsersComponent,
  },
  {
    path: ':id',
    resolve: { user: UserResolver },
    component: UserDetailsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsersRoutingModule {}
