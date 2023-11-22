import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class MiddlewareResMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    req.on('close', () => {
      /**
       * http://localhost:3000/location/sse?typt=sse&id=123
       * handle close Page or close EventSource.close()
       */
      console.log('req close');
      console.log(req.query);
    });
    next();
  }
}
