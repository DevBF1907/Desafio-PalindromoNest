/* eslint-disable prettier/prettier */
import { Injectable, BadRequestException } from '@nestjs/common';
import {PalindromeResponseDto} from './dto/palindrome-reponse.dto';
@Injectable()
export class PalindromeService {
  checkPalindrome(num: string): PalindromeResponseDto {
 
    if (!num || num.trim() === '') {
      throw new BadRequestException({
        error: 'Parâmetro obrigatório',
        message: 'O parâmetro "num" é obrigatório',
      });
    }

   
    const numberValue = Number(num);
    if (isNaN(numberValue)) {
      throw new BadRequestException({
        error: 'Parâmetro inválido',
        message: 'O parâmetro "num" deve ser um número válido',
      });
    }

   
    if (numberValue < 0) {
      return {
        number: numberValue,
        isPalindrome: false,
      };
    }

    
    const numStr = num.toString();
    const reversedStr = numStr.split('').reverse().join('');

    const isPalindrome = numStr === reversedStr;

    return {
      number: numberValue,
      isPalindrome,
    };
  }
}
