import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, map } from 'rxjs';
import { User } from 'src/app/core/interfaces';

@Component({
  selector: 'user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserDetailsComponent {
  readonly user$: Observable<User> = this.route.data.pipe(
    map(({ user }) => user)
  )

  constructor (
    private readonly route: ActivatedRoute,
  ) {}
}