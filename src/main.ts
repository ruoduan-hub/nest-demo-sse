import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MiddlewareResMiddleware } from './middleware/middleware.middleware';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use((req, res, next) =>
    new MiddlewareResMiddleware().use(req, res, next),
  );
  await app.listen(3000);
}
bootstrap();
