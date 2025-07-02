import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { INestApplication } from '@nestjs/common';

export function setupSwagger(app: INestApplication) {
  const config = new DocumentBuilder()
    .setTitle('car bookings')
    .setDescription('API for car bookings')
    .setVersion('1.0')
    .addTag('car bookings')
    .addBearerAuth()
    .build();
  const documentFactory = SwaggerModule.createDocument(app, config);

  SwaggerModule.setup('api', app, documentFactory);
}
