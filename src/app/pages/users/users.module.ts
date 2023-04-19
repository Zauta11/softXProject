import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersRoutingModule } from './users-routing.module';
import { OverlayModule } from '@angular/cdk/overlay';
import { FirstLetterPipe } from './pipes/first-letter.pipe';
import { UsersComponent } from './users.component';
import { UserDetailsComponent } from './user-details/user-details.component';



@NgModule({
  declarations: [
    FirstLetterPipe,
    UsersComponent,
    UserDetailsComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    OverlayModule
  ]
})
export class UsersModule { }
