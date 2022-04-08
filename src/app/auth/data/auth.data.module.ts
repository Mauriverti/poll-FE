import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { AuthRepository } from './auth.repository';
import { LocalStorageAuthRepository } from './localstorage-auth.repository';

@NgModule({
  imports: [
    HttpClientModule
  ],
  providers: [
    LocalStorageAuthRepository,
    AuthRepository,
  ]
})
export class AuthDataModule { }
