import { Controller, Get } from '@nestjs/common';

import { AppService } from './app.service';
import { MyConfigService } from '../my-config/my-config.service';
import { TwitterOauthService } from 'twitter-oauth';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly configService: MyConfigService,
    private readonly twitterOauthService: TwitterOauthService,
  ) {}

  @Get()
  getData() {
    const OAUTH_CLIENT_ID = this.configService.getOAUTH_CLIENT_ID();
    const OAUTH_CLIENT_ID_fromLib = this.twitterOauthService.getOAUTH_CLIENT_ID();

    return `${OAUTH_CLIENT_ID} ${OAUTH_CLIENT_ID_fromLib}`;
  }
}
