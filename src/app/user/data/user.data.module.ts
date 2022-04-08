import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { UserRepository } from './user.repository';

@NgModule({
  imports: [
    HttpClientModule,
  ],
  providers: [
    UserRepository,
  ]
})
export class UserDataModule { }
