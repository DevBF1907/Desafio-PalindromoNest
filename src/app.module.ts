/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PalindromeModule } from './palindrome/palindrome.module';


@Module({
  imports: [PalindromeModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
