import { Module } from '@nestjs/common';
import { MyConfigService } from './my-config.service';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath:
        'packages/twapp-b/src/my-config/envs/.env.local',
    }),
  ],
  providers: [MyConfigService],
  exports:[MyConfigService]
})
export class MyConfigModule {}
