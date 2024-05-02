import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
	const app = await NestFactory.create(AppModule);

	const configService = app.get(ConfigService);
	app.useGlobalPipes(new ValidationPipe({ transform: true }));
	app.enableCors();

	const port: number = configService.getOrThrow<number>('PORT');
	const config = new DocumentBuilder()
		.setTitle('Real Estate')
		.setDescription('Build real estate')
		.setVersion('1.0')
		.addBearerAuth()
		.build();
	const document = SwaggerModule.createDocument(app, config);
	SwaggerModule.setup('api', app, document);

	await app.listen(port);
	console.log(`Starting server on http://localhost:${port}/api`);
}
bootstrap();
