import { Controller, Post, Body, Sse } from '@nestjs/common';
import { Observable, interval, map } from 'rxjs';
import * as EventEmitter from 'events';

const myEmitter = new EventEmitter();

@Controller('location')
export class LocationtController {
  private mapList = [];

  @Sse('sse')
  sse(): Observable<MessageEvent> {
    return new Observable<any>((observer) => {
      myEmitter.on('send', (data: any) => {
        this.mapList = [data, ...this.mapList];
        observer.next({ data: this.mapList });
      });
    });
  }

  @Post()
  addList(@Body() body): any {
    myEmitter.emit('send', body);
    return 'ok';
  }
}
