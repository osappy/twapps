import { Test } from '@nestjs/testing';
import { TwitterOauthService } from './twitter-oauth.service';

describe('TwitterOauthService', () => {
  let service: TwitterOauthService;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [TwitterOauthService],
    }).compile();

    service = module.get(TwitterOauthService);
  });

  it('should be defined', () => {
    expect(service).toBeTruthy();
  });
});
