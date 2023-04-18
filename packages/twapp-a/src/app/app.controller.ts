import { Controller, Get } from '@nestjs/common';

import { AppService } from './app.service';
import { MyConfigService } from '../my-config/my-config.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly configService: MyConfigService
  ) {}

  @Get()
  getData() {
    return this.configService.getOAUTH_CLIENT_ID();
  }
}
