import { NgModule } from '@angular/core';
import { MergeUsersUserCase } from './use-cases/merge-user.use-case';

@NgModule({
  providers: [
    MergeUsersUserCase,
  ]
})
export class UserDomainModule { }
