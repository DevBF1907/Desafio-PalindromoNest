# 🚀 API de Verificação de Palíndromos - NestJS

Este projeto é uma API simples desenvolvida em NestJS para verificar se um número é um palíndromo (igual quando lido de frente para trás e de trás para frente).

## 📋 Pré-requisitos

Node.js (versão 16 ou superior)

npm ou yarn

Conhecimentos básicos em TypeScript

## 🛠 Tecnologias Utilizadas

NestJS - Framework para construção de APIs

TypeScript - Linguagem de programação

JavaScript - Linguagem base

## 📁 Estrutura do Projeto

```text

src/
├── app.module.ts              # Módulo principal da aplicação
├── main.ts                    # Arquivo de inicialização
└── palindrome/                # Módulo de palíndromos
    ├── palindrome.module.ts   # Módulo do palíndromo
    ├── palindrome.controller.ts # Controller das rotas
    ├── palindrome.service.ts  # Lógica de negócio
    └── dto/
        └── palindrome-response.dto.ts # Data Transfer Object

```

## 🚀 Como Executar o Projeto

1. Instalação das Dependências
```bash
npm install
```
2. Execução em Modo Desenvolvimento
```bash
npm run start:dev
```
3. Execução em Modo Produção
```bash
npm run start
```
4. Build do Projeto

```bash
npm run build   
```
### 📚 Explicação do Código

## 🔄 Para Desenvolvedores Spring Boot

Se você vem do Spring Boot, aqui está uma comparação dos conceitos:

| Spring Boot | NestJS | Função |
|-------------|---------|---------|
| `@RestController` | `@Controller` | Define um controller |
| `@Service` | `@Injectable()` | Define um service |
| `@Autowired` | Injeção no construtor | Injeção de dependência |
| `@GetMapping` | `@Get()` | Mapeia método GET |
| `@RequestParam` | `@Query()` | Parâmetros de query |
| `ResponseEntity` | Retorno direto | Retorno de responses |

# 🧩 Componentes Principais

1. DTO (Data Transfer Object)
```typescript
// Similar ao DTO do Spring Boot
export class PalindromeResponseDto {
  number: number;
  isPalindrome: boolean;
}
```

2. Service (Camada de Negócio)
```typescript
@Injectable() // Similar ao @Service do Spring
export class PalindromeService {
  checkPalindrome(num: string): PalindromeResponseDto {
    // Lógica de validação e verificação
  }
}
```
3. Controller (Camada de Apresentação)
```typescript
@Controller() // Similar ao @RestController
export class PalindromeController {
  constructor(private readonly palindromeService: PalindromeService) {} // Injeção de dependência
  
  @Get('palindrome') // Similar ao @GetMapping
  checkPalindrome(@Query('num') num: string): PalindromeResponseDto {
    return this.palindromeService.checkPalindrome(num);
  }
}
```

# 📡 Endpoints da API
## GET /palindrome

Verifica se um número é um palíndromo.

##Parâmetros:

num (query string) - Número a ser verificado

Exemplos de Uso:

```bash
# Número é palíndromo
curl "http://localhost:3000/palindrome?num=121"
# Response: {"number":121,"isPalindrome":true}

# Número não é palíndromo
curl "http://localhost:3000/palindrome?num=123"
# Response: {"number":123,"isPalindrome":false}

# Número negativo (nunca é palíndromo)
curl "http://localhost:3000/palindrome?num=-121"
# Response: {"number":-121,"isPalindrome":false}

# Parâmetro não informado
curl "http://localhost:3000/palindrome"
# Response: {"error":"Parâmetro obrigatório","message":"O parâmetro \"num\" é obrigatório"}

# Parâmetro inválido
curl "http://localhost:3000/palindrome?num=abc"
# Response: {"error":"Parâmetro inválido","message":"O parâmetro \"num\" deve ser um número válido"}
```

# 🧪 Casos de Teste Implementados

✅ 121 → true (é palíndromo)

✅ 123 → false (não é palíndromo)

✅ -121 → false (negativos não são palíndromos)

✅ 10 → false (não é palíndromo)

✅ Parâmetro não enviado → erro

✅ Parâmetro inválido → erro

# 🔧 Lógica de Negócio

Validação de entrada: Verifica se o parâmetro foi enviado e é válido

Verificação de negativo: Números negativos nunca são palíndromos

Conversão e comparação: Converte para string e compara com sua versão reversa

Retorno padronizado: Sempre retorna no formato JSON especificado

# 🎯 Características do Projeto

Arquitetura modular: Segue os princípios do NestJS

Tratamento de erros: Retornos padronizados para diferentes cenários de erro

Código limpo: Separação de responsabilidades entre controller e service

Type Safety: Uso de TypeScript para maior confiabilidade

# 📝 Próximos Passos Possíveis

Adicionar testes unitários

Implementar documentação com Swagger



👨‍💻 Autor
Desenvolvido como exemplo de API REST com NestJS para Desafio de projeto voluntário.
