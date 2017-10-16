## Overview

O Github é uma rede social de programadores que possui uma funcionalidade interessante que permite curtir o repositório alheio. Trata-se de um botão escrito Star encontrado na página de cada repositório.  
Rick é um usuário ativo do Github que está sempre buscando novos projetos curtindo os que acha interessantes. Ele gostaria de poder adicionar um label ou tag para marcar o repositório de modo que ele possa filtrar. Por exemplo, ele encontrou um repositório chamado `react` e gostaria de adicionar as tags *javascript* e *frontend*.  
Como o Github não possui essa funcionalidade, Rick precisa de um sistema que consiga ajudá-lo com isso.

## Tecnologias

Na brainn.co não trabalhamos com uma linguagem ou framework apenas. Somos poliglotas e incentivamos o uso de novas tecnologias desde que o time concorde em conjunto e esteja preparado para assumir os riscos de ter que reimplementar utilizando alguma tecnologia mais tradicional em casos de incidentes.  
Entretanto, nesse momento, estamos com um time pequeno e por enquanto nossas opções de linguagem são limitadas.  
Escolha uma das linguagens abaixo para o desafio:

* Python
* Javascript
* Golang
* Java
* Ruby

## O que vai ser avaliado?

- Código limpo e coeso utilizando os princípios [SOLID](https://www.google.com.br/search?q=principios+solid&oq=principios+solid).
- Simplicidade na implementação da solução
- API Restful 
- Testes automatizados
- Cobertura de testes
- Linter/Análise estática do código
- Integração Contínua com o travis-ci
- Uso do ORM ou Queries SQL para trabalhar com banco de dados
- Documentação da API utilizando API Blueprint, RAML ou Swagger
- Conhecimento em Javascript, HTML e CSS
- Conhecimento em algum framework/lib Javascript para SPA
- Usabilidade e design do frontend

## Instruções

1. Crie um repositório na sua conta do Github;
2. Descreva no `README.md` como configurar o projeto (rodar a app, rodar os testes, envvars...);
3. Envie por email a URL do repositório criado.

## Desafio

O desafio é composto por 3 user stories:

### 1. Obter repositórios remotos e cadastrar no banco de dados local

> Como usuário, eu quero fornecer meu username e obter todos os repositórios que eu curti e salvar no banco de dados para depois conseguir adicionar minhas tags.

#### Cenário

O usuário executa algum comando ou script pelo terminal passando o username como parâmetro para que obtenha os repositórios do Github.

#### Critérios de Aceitação

* Deve obter os repositórios com star utilizando a API Rest v3 do Github. Utilizar a API v4 com GraphQL é um plus.
* O banco de dados pode ser SQLite3, MySQL ou Postgres.
* As informações que devem ser salvas no banco de dados são: ID do repositório, nome do repositório, url http e linguagem.


### 2. Adicionar tags para os repositórios

> Como usuário, eu quero poder adicionar tags (labels) para cada repositório para eu poder efetuar uma busca por tag.

#### Cenário

O usuário acessa o sistema pelo browser, visualiza a lista de repositórios cadastrados no banco de dados, seleciona um deles e consegue digitar tags separadas por vírgula para salvar em seguida.

#### Critérios de Aceitação

* O campo de tags no banco de dados pode ser um CharField comum, não precisa utilizar campos específicos do MySQL ou Postgres.
* Um repositório não pode ter tags duplicadas.
* Pode utilizar o Admin do Django se preferir.

### 3. Buscar repositórios por tag

> Como usuário, quero poder fornecer uma tag e obter os repositórios que possuem essa tag para visualizar na tela o resultado da minha busca.

#### Cenário

O usuário acessa o sistema pelo browser, digita uma tag e clica no botão. O sistema exibe todos os repositórios que tenham a tag definida.

#### Critérios de Aceitação

* Uma tela utilizando semantic-ui ou twitter bootstrap para aparência.
* Utilizar Ajax para obter os repositórios
* A busca não precisa estar perfeita. Se buscar pela tag `java` e retornar repositório contendo `javascript`, não tem problema.

## Considerações Finais

Entendemos as dificuldades do dia-a-dia para quem trabalha em ter que dedicar um tempo para resolver esse tipo de desafio. Por isso pedimos para que mesmo que você não consiga completar o desafio, nos envie assim mesmo. Não queremos julgar nossos candidatos, queremos apenas entender melhor a maneira como cada um pensa e age diante de um problema comum.  

Qualquer dúvida pode entrar em contato conosco.  

Boa sorte!!!
