/* eslint-disable prettier/prettier */
import { Controller, Get, Query } from '@nestjs/common';
import { PalindromeService } from './palindrome.service';
import { PalindromeResponseDto } from './dto/palindrome-reponse.dto';

@Controller()
export class PalindromeController {
  
  constructor(private readonly palindromeService: PalindromeService) {}

  @Get('palindrome')
  checkPalindrome(@Query('num') num: string): PalindromeResponseDto {
    return this.palindromeService.checkPalindrome(num);
  }
}