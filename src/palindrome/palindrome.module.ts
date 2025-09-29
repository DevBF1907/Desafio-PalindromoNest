/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { PalindromeController } from './palindrome.controller';
import { PalindromeService } from './palindrome.service';

@Module({
  controllers: [PalindromeController],
  providers: [PalindromeService],
})
export class PalindromeModule {}