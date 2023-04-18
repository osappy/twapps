import { Module } from '@nestjs/common';
import { TwitterOauthService } from './twitter-oauth.service';

@Module({
  controllers: [],
  providers: [TwitterOauthService],
  exports: [TwitterOauthService],
})
export class TwitterOauthModule {}
