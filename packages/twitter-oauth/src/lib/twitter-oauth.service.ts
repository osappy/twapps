import { Injectable } from '@nestjs/common';

@Injectable()
export class TwitterOauthService {
  getOAUTH_CLIENT_ID() {
    // TODO: I would like to get the values from the .env of each project in this lib.
    return "I would like to get the values from the .env of each project."
  }
}
