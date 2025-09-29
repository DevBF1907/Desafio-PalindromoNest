/* eslint-disable prettier/prettier */
import { Controller, Get, Query } from '@nestjs/common';
import { PalindromeService } from './palindrome.service';
import { PalindromeResponseDto } from './dto/palindrome-reponse.dto';
import { ApiOperation, ApiQuery, ApiResponse, ApiTags } from '@nestjs/swagger';


@ApiTags('palindrome')
@Controller()
export class PalindromeController {
  
  constructor(private readonly palindromeService: PalindromeService) {}

  @Get('palindrome')
    @ApiOperation({ 
    summary: 'Verifica se um número é palíndromo',
    description: 'Retorna true se o número for igual quando lido de trás para frente'
  })
  @ApiQuery({
    name: 'num',
    required: true,
    description: 'Número a ser verificado',
    example: '121'
  })
  @ApiResponse({
    status: 200,
    description: 'Número verificado com sucesso',
    type: PalindromeResponseDto
  })
  @ApiResponse({
    status: 400,
    description: 'Parâmetro inválido ou não informado'
  })
  checkPalindrome(@Query('num') num: string): PalindromeResponseDto {
    return this.palindromeService.checkPalindrome(num);
  }
}