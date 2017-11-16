## Overview

O Bitcoin (ou BTC) é uma moeda virtual criada por um desenvolvedor de software sob o pseudônimo Satoshi Nakamoto. Embora não fosse inicialmente muito conhecido, o Bitcoin atraiu muita atenção no mundo financeiro nos últimos anos. Com esse novo número de interessados, investir em Bitcoins hoje em dia está mais fácil do que nunca. No entanto, é válido ressaltar que esse não é um tipo tradicional de investimento, como o mercado financeiro. Na verdade, o Bitcoin é uma moeda instável cujo valor da cotação muda frequentemente.
Seu desafio consiste em ajudar o investidor exibindo o valor das cotações do Bitcoin nas principais exchanges brasileiras e fornecendo um mecanismo de compra.

## Tecnologias

Na brainn.co não trabalhamos com uma linguagem ou framework apenas. Somos poliglotas e incentivamos o uso de novas tecnologias desde que o time concorde em conjunto e esteja preparado para assumir os riscos de ter que reimplementar utilizando alguma tecnologia mais tradicional em casos de incidentes.  
Entretanto, nesse momento, estamos com um time pequeno e por enquanto nossas opções são limitadas.  
Escolha um dos frameworks abaixo para o desafio:

* ReactJS
* VueJS

**Atenção:** Não utilize nenhum framework/lib de CSS (semantic-ui, bootstrap, milligram etc.). Escreva um CSS puro.

## O que vai ser avaliado?

- Código limpo e coeso utilizando os princípios [SOLID](https://www.google.com.br/search?q=principios+solid&oq=principios+solid).
- Simplicidade na implementação da solução
- Testes automatizados
- Cobertura de testes
- Linter/Análise estática do código
- Integração Contínua com o travis-ci
- Conhecimento em Javascript, HTML e CSS
- Responsividade
- Usabilidade e design do frontend

## Instruções

1. Crie um repositório na sua conta do Github;
2. Descreva no `README.md` como configurar o projeto (rodar a app, rodar os testes, envvars...);
3. Envie por email a URL do repositório criado.

## Desafio

O desafio é composto por 2 user stories:

### 1. Exibir o valor das cotações do Bitcoin

> Como usuário, eu quero visualizar as últimas cotações do Bitcoin nas exchanges brasileiras para me ajudar a decidir de qual delas vou comprar.

#### Cenário

O usuário entra no site e visualiza uma tabela contendo o identificador da exchange e sua última cotação dela para 1 Bitcoin.

#### Critérios de Aceitação

* Os dados ordenados em ordem crescente, a menor cotação fica no topo da tabela;
* A tabela deve ser responsiva e sem scroll horizontal na tela de um Iphone 6.

#### Mais Informações

A API de consulta é `https://api.bitvalor.com/v1/ticker.json` e a chave `ticker_1h`.

### 2. Efetuar uma ordem de compra

> Como usuário, eu quero efetuar uma compra de Bitcoin informando a quantidade e a exchange com a menor cotação.

#### Cenário

Depois que o usuário viu as cotações ele decidiu comprar 0.80 BTC da exchange com a menor cotação. Ele escolhe uma exchange e fornece a quantidade desejada. O sistema calcula o preço de acordo com a quantidade informada e o valor da cotação selecionada, o usuário visualiza, confirma e envia uma ordem de compra.

#### Critérios de Aceitação

* A quantidade de BTC pode ser um número decimal;
* Dado a quantidade e a cotação, o usuário deve visualizar o valor total antes de confirmar o envio da ordem. Ex.: 1 BTC = R$24000, então 0.8 BTC custa R$19200.
* Somente após a confirmação do usuário que a ordem é enviada

#### Mais Informações

A documentação da API, o que deve ir no `request` e qual o `response` esperado está em https://btcdemo.docs.apiary.io/.

## Considerações Finais

Entendemos as dificuldades do dia-a-dia para quem trabalha em ter que dedicar um tempo para resolver esse tipo de desafio. Por isso pedimos para que mesmo que você não consiga completar o desafio, nos envie assim mesmo. Não queremos julgar nossos candidatos, queremos apenas entender melhor a maneira como cada um pensa e age diante de um problema comum.  

Qualquer dúvida pode entrar em contato conosco.  

Boa sorte!!!