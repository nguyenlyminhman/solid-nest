import { PrismaService } from './modules/prisma/prisma.service';
import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import type { NestExpressApplication } from '@nestjs/platform-express';
import { ExpressAdapter } from '@nestjs/platform-express';
import { join } from 'path';

import { AppModule } from './app.module';
import { SwaggerConfig } from './configs/swagger';
import { SharedModule } from './shared/shared.module';
import { AppConfigService } from './shared/app-config.service';

async function bootstrap(): Promise<NestExpressApplication> {
  const app = await NestFactory.create<NestExpressApplication>(
    AppModule,
    new ExpressAdapter(),
    { cors: true },
  );

  const serverConfig = app.select(SharedModule).get(AppConfigService);
  const { port } = serverConfig.serverPort;

  app.useStaticAssets(join(__dirname, '..', 'public'));
  app.setGlobalPrefix('/api');
  app.useGlobalPipes(new ValidationPipe());
  app.enableVersioning();
  // Microservice config here

  // Setup swagger
  if (serverConfig.swaggerEnabled) {
    SwaggerConfig(app);
  }

  await app.listen(port);

  return app;
}

void bootstrap();
