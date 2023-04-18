import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MyConfigModule } from '../my-config/my-config.module';
import { TwitterOauthModule, TwitterOauthService } from 'twitter-oauth';

@Module({
  imports: [MyConfigModule, TwitterOauthModule],
  controllers: [AppController],
  providers: [AppService, TwitterOauthService],
})
export class AppModule {}
