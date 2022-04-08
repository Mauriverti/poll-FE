import { NgModule } from '@angular/core';
import { UserDataModule } from './data/user.data.module';
import { UserDomainModule } from './domain/user.domain.module';

@NgModule({
  imports: [
    UserDataModule,
    UserDomainModule,
  ]
})
export class UserModule { }
