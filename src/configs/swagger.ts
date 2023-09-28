import type { INestApplication } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

export function SwaggerConfig(app: INestApplication): void {
  const documentBuilder = new DocumentBuilder()
    .setTitle('CATs SERVER')
    .setDescription('The API Document for CATS Service')
    .addBearerAuth();

  if (process.env.API_VERSION) {
    documentBuilder.setVersion(process.env.API_VERSION);
  }

  const document = SwaggerModule.createDocument(app, documentBuilder.build());
  SwaggerModule.setup('documentation', app, document, {
    swaggerOptions: {
      persistAuthorization: true,
    },
    customSiteTitle: 'CATs API System Service',
    customfavIcon: '../img/favicon.ico',
    customCssUrl: '../css/swagger.css',
  });

  console.info(`API docs: http://localhost:${process.env.PORT}/documentation`);
}
