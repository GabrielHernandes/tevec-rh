# Teste de recrutamento de analista desenvolvedor

# Objetivo

Essa dinâmica foi elaborada para avaliar o grau de maturidade do candidato a vaga de análise e desenvolvimento da Tevec;  
Avaliaremos:
- Sua habilidade em compreender problemas de negócio;
- Habilidade de comunicação com time técnico e usuário final;
- Habilidade em propor soluções adicionais ao problema;
- Habilidade de elaboração de algoritmos;
- Habilidade de desenvolvimento Web;
- Habilidade de desenvolvimento Python;
- Habilidade de manipulação de banco de dados;
- Habilidade na aplicação de boas práticas de desenvolvimento;
- Capricho no desenvolvimento da solução;
- Habilidade em versionamento de código;
- Habilidade em TDD;
- Legibilidade do código;

Será um diferencial caso a solução utilize redux (rxjs) em suas transações, contenha qualidade de aparências e comportamento, seja bem documentada e utilize TDD;

# Questionário

## 1ª Questão

Um cliente nos solicitou o desenvolvimento de um software que simule um caixa eletronico. Essa solução deve receber um valor a ser sacado e exibir na tela o menor numeros de notas de R$ 20,00 e R$ 50,00 a serem emitidas. 
Exemplo:  
- Entrada = R$ 70,00;  
- Saída = 1 nota de R$ 50,00 e 1 nota de R$ 20,00

No documento ata.docx, redija a Ata de uma reunião de especificação onde você entrevista o cliente para entender a solução e conclua com o escopo da entrega a ser desenvolvida.

## 2ª Questão

No documento especificacao.docx, elabore uma breve especificação que gere insumo suficiente para que o time de desenvolvimento construa a solução e o cliente entenda de forma clara o que sera desenvolvido; 

## 3ª Questão

Proponha uma arquitetura de infraestrutura para hospedagem dessa solução na nuvem, considerando o conteúdo estático, banco de dados e publicação da API;

## 4ª Questão

No projeto atm-api crie:
- Uma rota que retorne a versão da API;
- Uma rota que calcule o numero de notas;
- Uma rota que armazene o historico de transações em um banco [Elasticsearch](https://hub.docker.com/_/elasticsearch);
- Uma rota que consulte as ultimas 10 transações efetuadas ordenadas da mais recente para a mais tardia;

## 5ª Questão
No projeto atm-api crie um CLI que permita executar chamadas aos metodos da API via console.

## 6ª Questão
No projeto atm-ui crie uma página para que o usuário iteraja com o caixa eletrônico, contendo uma caixa de entrada para informar a quantidade que deseja sacar e um botão sacar, para efetivar a transação.   
Ao efetivar a transação o sistema deverá enviar a requisição para a api, calcular o número de notas necessários e exibir a resposta em tela.  
O sistema também deverá atualizar o histórico de transaçãoes e exibir as 10 últimas transações efetuadas.
Os erros devem ser tratados e notificados de forma amigável ao usuário final.
