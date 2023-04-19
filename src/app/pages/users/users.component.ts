import { ChangeDetectionStrategy, ChangeDetectorRef, Component, TemplateRef } from '@angular/core';
import { UsersService } from './infrastructure/users.service';
import { EMPTY, catchError } from 'rxjs';
import { ContextMenuService } from './infrastructure/context-menu.service';
import { Router } from '@angular/router';
import { User } from 'src/app/core/interfaces';

@Component({
  selector: 'users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
  providers: [
    ContextMenuService
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UsersComponent {
  users?: User[];
  deletingProcessing = false;

  constructor(
    private readonly usersService: UsersService,
    private readonly cdRef: ChangeDetectorRef,
    private readonly contextMenu: ContextMenuService,
    private readonly router: Router
  ) {
    this.initData();
  }

  initData(): void {
    this.usersService
      .getUsers()
      .pipe(
        catchError(() => {
          alert('Error');

          return EMPTY;
        })
      )
      .subscribe((users: User[]) => {
        this.users = users;
        this.cdRef.markForCheck();
      });
  }

  deleteUser(userId: number): void {
    this.deletingProcessing = true;

    this.usersService
      .deleteUser(userId)
      .pipe(
        catchError(() => {
          alert('Error');

          this.deletingProcessing = false;
          this.menuClose();
          return EMPTY;
        })
      )
      .subscribe(() => {
        this.users = this.users?.filter(({ id }) => id !== userId);
        this.cdRef.markForCheck();

        this.deletingProcessing = false;
        this.menuClose();
      });
  }

  menuOpen(user: User, menuTempalte: TemplateRef<any> ,event: MouseEvent): void {
      this.contextMenu.openMenu(user, menuTempalte, event)
  }

  menuClose() {
    this.contextMenu.closeMenu();
  }

  goToDetails(userId: number): void {
    this.router.navigate(['users', userId])
  }

  
  trackByFn(index: number, item: User): number {
    return item.id;
  }
}
