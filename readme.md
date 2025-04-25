<div align="center">
  <img src="https://img.icons8.com/color/96/000000/football.png" alt="Ícone de Futebol">
  <h1>API de Resultados do Campeonato Carioca</h1>
  <img src="https://img.icons8.com/color/96/000000/trophy.png" alt="Ícone de Troféu">
</div>

<br>

## ⚽ Propósito da Aplicação

Esta é uma API RESTful simples construída com Node.js e Express para fornecer informações sobre o Campeonato Carioca. Através desta API, você pode acessar dados como:

- A tabela de todos os times participantes.
- Os 5 times com o maior saldo de gols.
- Os 5 times com o melhor desempenho (baseado em pontos por jogo).
- Os 5 times com a defesa mais vazada (que sofreram mais gols).
- Os 4 times que se classificariam para a próxima fase (baseado no número de pontos).

<br>

## 🛠️ Tecnologias Utilizadas

- **Node.js**: Ambiente de execução JavaScript para o servidor.
- **Express**: Framework web minimalista e flexível para Node.js.

<br>

## 🚀 Como Utilizar

Para executar a aplicação localmente, siga os passos abaixo:

```bash
1. Clone o repositório (se aplicável):
   git clone [https://github.com/seu-repositorio/seu-projeto](https://github.com/seu-repositorio/seu-projeto)
   cd seu-projeto

2. Instale as dependências:
   npm install

3. Execute o servidor:
   npm start
```

O servidor estará rodando em `http://localhost:3333`.

\<br\>

## 🗺️ Endpoints da API

A API oferece os seguintes endpoints para acessar os dados:

  - **`/`**: Retorna uma mensagem de boas-vindas e um menu da aplicação.
    ```
    GET http://localhost:3333/
    ```
    Resposta:
    ```
    -----Menu da aplicação-----
    ```
  - **`/times/grupoUnico`**: Retorna a lista completa de todos os times.
    ```
    GET http://localhost:3333/times/grupoUnico
    ```
    Resposta (exemplo abreviado):
    ```json
    [
      {
        "nome": "Flamengo",
        "grupo": "Único",
        "urlEscudo": "[https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Flamengo_braz_logo.svg/250px-Flamengo_braz_logo.svg.png](https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Flamengo_braz_logo.svg/250px-Flamengo_braz_logo.svg.png)",
        "sigla": "FLA",
        "jogos": 11,
        "vitorias": 7,
        "empates": 2,
        "derrotas": 2,
        "golsPro": 25,
        "golsContra": 5,
        "saldoGols": 20,
        "pontos": 23,
        "desempenho": "69.70"
      },
      // ... outros times
    ]
    ```
  - **`/times/maiorsaldo`**: Retorna os 5 times com o maior saldo de gols.
    ```
    GET http://localhost:3333/times/maiorsaldo
    ```
    Resposta (exemplo):
    ```json
    [
      {
        "nome": "Flamengo",
        "grupo": "Único",
        "urlEscudo": "[https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Flamengo_braz_logo.svg/250px-Flamengo_braz_logo.svg.png](https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Flamengo_braz_logo.svg/250px-Flamengo_braz_logo.svg.png)",
        "sigla": "FLA",
        "jogos": 11,
        "vitorias": 7,
        "empates": 2,
        "derrotas": 2,
        "golsPro": 25,
        "golsContra": 5,
        "saldoGols": 20,
        "pontos": 23,
        "desempenho": "69.70"
      },
      {
        "nome": "Madureira",
        "grupo": "Único",
        "urlEscudo": "[https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSS7arw_UgM2b3NQbrXfBTNLZtXjns6yz6_LQ&s](https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSS7arw_UgM2b3NQbrXfBTNLZtXjns6yz6_LQ&s)",
        "sigla": "EC",
        "jogos": 11,
        "vitorias": 4,
        "empates": 3,
        "derrotas": 4,
        "golsPro": 11,
        "golsContra": 8,
        "saldoGols": 3,
        "pontos": 15,
        "desempenho": "45.45"
      },
      // ... outros times
    ]
    ```
  - **`/times/melhordesempenho`**: Retorna os 5 times com o melhor desempenho.
    ```
    GET http://localhost:3333/times/melhordesempenho
    ```
    Resposta (exemplo):
    ```json
    [
      {
        "nome": "Flamengo",
        "grupo": "Único",
        "urlEscudo": "[https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Flamengo_braz_logo.svg/250px-Flamengo_braz_logo.svg.png](https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Flamengo_braz_logo.svg/250px-Flamengo_braz_logo.svg.png)",
        "sigla": "FLA",
        "jogos": 11,
        "vitorias": 7,
        "empates": 2,
        "derrotas": 2,
        "golsPro": 25,
        "golsContra": 5,
        "saldoGols": 20,
        "pontos": 23,
        "desempenho": "69.70"
      },
      {
        "nome": "Volta Redonda",
        "grupo": "Único",
        "urlEscudo": "[https://upload.wikimedia.org/wikipedia/pt/b/ba/Volta%C3%A7oFC.png](https://upload.wikimedia.org/wikipedia/pt/b/ba/Volta%C3%A7oFC.png)",
        "sigla": "VRE",
        "jogos": 11,
        "vitorias": 6,
        "empates": 2,
        "derrotas": 3,
        "golsPro": 13,
        "golsContra": 12,
        "saldoGols": 1,
        "pontos": 20,
        "desempenho": "60.61"
      },
      // ... outros times
    ]
    ```
  - **`/times/defesamaisvazada`**: Retorna os 5 times com a defesa mais vazada.
    ```
    GET http://localhost:3333/times/defesamaisvazada
    ```
    Resposta (exemplo):
    ```json
    [
      {
        "nome": "Portuguesa RJ",
        "grupo": "Único",
        "urlEscudo": "[https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPTOTWsAbKK7lNl8YGnuXcnFNGSwsAA6QLFw&s](https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPTOTWsAbKK7lNl8YGnuXcnFNGSwsAA6QLFw&s)",
        "sigla": "AAP",
        "jogos": 11,
        "vitorias": 3,
        "empates": 1,
        "derrotas": 7,
        "golsPro": 12,
        "golsContra": 24,
        "saldoGols": -12,
        "pontos": 10,
        "desempenho": "30.30"
      },
      {
        "nome": "Bangu",
        "grupo": "Único",
        "urlEscudo": "[https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKt1JXlk67ciRvgr0nJ2UVsBQNrdY1NwOMjA&s](https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKt1JXlk67ciRvgr0nJ2UVsBQNrdY1NwOMjA&s)",
        "sigla": "BGU",
        "jogos": 11,
        "vitorias": 0,
        "empates": 4,
        "derrotas": 7,
        "golsPro": 4,
        "golsContra": 20,
        "saldoGols": -16,
        "pontos": 4,
        "desempenho": "12.12"
      },
      // ... outros times
    ]
    ```
  - **`/times/proximafase`**: Retorna os 4 times com mais pontos (simulando a próxima fase).
    ```
    GET http://localhost:3333/times/proximafase
    ```
    Resposta (exemplo):
    ```json
    [
      {
        "nome": "Flamengo",
        "grupo": "Único",
        "urlEscudo": "[https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Flamengo_braz_logo.svg/250px-Flamengo_braz_logo.svg.png](https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Flamengo_braz_logo.svg/250px-Flamengo_braz_logo.svg.png)",
        "sigla": "FLA",
        "jogos": 11,
        "vitorias": 7,
        "empates": 2,
        "derrotas": 2,
        "golsPro": 25,
        "golsContra": 5,
        "saldoGols": 20,
        "pontos": 23,
        "desempenho": "69.70"
      },
      {
        "nome": "Volta Redonda",
        "grupo": "Único",
        "urlEscudo": "[https://upload.wikimedia.org/wikipedia/pt/b/ba/Volta%C3%A7oFC.png](https://upload.wikimedia.org/wikipedia/pt/b/ba/Volta%C3%A7oFC.png)",
        "sigla": "VRE",
        "jogos": 11,
        "vitorias": 6,
        "empates": 2,
        "derrotas": 3,
        "golsPro": 13,
        "golsContra": 12,
        "saldoGols": 1,
        "pontos": 20,
        "desempenho": "60.61"
      },
      {
        "nome": "Fluminense",
        "grupo": "Único",
        "urlEscudo": "[https://tntsports.com.br/__export/1588108304121/sites/esporteinterativo/img/2020/04/28/arte_fluminense.png_375107878.png](https://tntsports.com.br/__export/1588108304121/sites/esporteinterativo/img/2020/04/28/arte_fluminense.png_375107878.png)",
        "sigla": "FLU",
        "jogos": 11,
        "vitorias": 4,
        "empates": 5,
        "derrotas": 2,
        "golsPro": 13,
        "golsContra": 9,
        "saldoGols": 4,
        "pontos": 17,
        "desempenho": "51.52"
      },
      {
        "nome": "Vasco da Gama",
        "grupo": "Único",
        "urlEscudo": "[https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrkgZdrbGTJgsEFnQy2u7_9OIH-1DHjaTzUw&s](https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrkgZdrbGTJgsEFnQy2u7_9OIH-1DHjaTzUw&s)",
        "sigla": "VG",
        "jogos": 11,
        "vitorias": 4,
        "empates": 5,
        "derrotas": 2,
        "golsPro": 13,
        "golsContra": 9,
        "saldoGols": 4,
        "pontos": 17,
        "desempenho": "51.52"
      }
    ]
    ```

\<br\>

## 📄 Estrutura dos Arquivos

```
.
├── database/
│   └── database-memory.js  # Contém a tabela de times e a lógica de cálculo.
├── services/
│   └── services.js         # Contém as funções para manipular e ordenar os dados.
├── server.js               # Arquivo principal que define as rotas e inicia o servidor.
└── README.md               # Este arquivo.
```

\<div align="center"\>
Feito com ❤️ por um entusiasta do futebol\!
\</div\>