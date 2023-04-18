import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class MyConfigService {
  constructor(private configService: ConfigService) {}

  get Service() {
    return this.configService;
  }

  getOAUTH_CLIENT_ID() {
    return this.configService.get('OAUTH_CLIENT_ID');
  }

  getOAUTH_CLIENT_SECRET() {
    return this.configService.get('OAUTH_CLIENT_SECRET');
  }
}
