/* eslint-disable prettier/prettier */
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Palindrome API')
    .setDescription(`
# API de Verificação de Palíndromos

Esta API verifica se um número é um palíndromo, ou seja, 
se é igual quando lido da esquerda para direita e vice-versa.

## Exemplos de uso:
- ✅ 121 → true
- ❌ 123 → false
- ❌ -121 → false
- ❌ 10 → false
    `)
    .setVersion('1.0')
    .setContact('Seu Nome', 'https://seusite.com', 'seu@email.com')
    .addTag('palindrome', 'Operações relacionadas a palíndromos')
    .build();

  const document = SwaggerModule.createDocument(app, config);

  SwaggerModule.setup('api', app, document, {
    customSiteTitle: 'Palindrome API Documentation',
    customCss: `
      .swagger-ui .topbar { display: none }
      .swagger-ui .info { margin: 20px 0 }
    `,
    customfavIcon: '/favicon.ico'
  });

  
  await app.listen(3000);
  console.log('🚀 Application running on: http://localhost:3000');
  console.log('📚 Swagger documentation: http://localhost:3000/api');
}
bootstrap();