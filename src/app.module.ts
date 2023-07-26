import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LocationtController } from './location/location.controller';

@Module({
  imports: [],
  controllers: [AppController, LocationtController],
  providers: [AppService],
})
export class AppModule {}
