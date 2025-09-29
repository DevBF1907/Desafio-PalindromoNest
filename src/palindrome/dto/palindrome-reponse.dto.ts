/* eslint-disable prettier/prettier */
import { ApiProperty } from '@nestjs/swagger';

export class PalindromeResponseDto {
   @ApiProperty({
    description: 'Número verificado',
    example: 121
  })
  number: number;


  @ApiProperty({
    description: 'Indica se o número é palíndromo',
    example: true
  })
  isPalindrome: boolean;
}
