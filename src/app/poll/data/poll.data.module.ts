import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { TokenInterceptor } from 'src/app/shared/interceptors/token.interceptor';
import { PollRepository } from './poll.repository';
import { VoteRepository } from './vote.repository';

@NgModule({
  imports: [
    HttpClientModule,
  ],
  providers: [
    PollRepository,
    VoteRepository,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    },
  ]
})
export class PollDataModule { }
