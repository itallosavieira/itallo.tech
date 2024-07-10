---
title: 'Data Mapper Pattern no Frontend'
date: '04/23/2024'
category: 'patterns'
---z
## A Definição:
O Data Mapper Pattern é uma técnica fundamental para a transferência eficiente e bidirecional de dados entre a camada de Domínio e a camada de Persistência.

Parece que é uma coisa super complicada, mas é bem simples, esse padrão garante que as camadas sejam independentes em relação a padronização de dados.

![](/posts/data-mapper-01.png)

Nesse exemplo aplicado ao Frontend, vamos considerar Camada de Domínio e Persistência o seguinte:

![](/posts/data-mapper-02.png)

Cada camada tem seu padrão de dados, sendo assim, quando o frontend precisa se comunicar com uma API, por exemplo, é necessário um tratamento desses dados. Pra isso, existe o Pattern de Data Mapper, pra fazer essa ponte entre Domínio e Persistência, na recepção e no envio (bidirecional) de dados. Ou seja, não preciso forçar uma camada a se adequar ao padrão da outra. Tornando cada uma independente da outra.

![](/posts/data-mapper-03.png)

## O Problema:
Quando o frontend precisa se comunicar com uma API, pode surgir a necessidade de manipular os dados para que estejam em conformidade com o padrão esperado pela API. Além disso, qualquer mudança no formato dos dados na camada de Persistência pode resultar em uma cascata de atualizações em todo o código do frontend, tornando o código propenso a erros e difícil de manter.

Digamos que a gente precise fazer um GET de infos de um usuário, mas o padrão de nomenclatura dos campos está como snake_case, como o "user_id". Por exemplo:

```json
{
  "name": "Itallo Sá Vieira",
  "user_id": "123",
  "email": "",
}
```

Se o padrão de nomenclatrura no frontend for camelCase,  será necessário tratar esse campo "user_id" para "userID" pra se adequar. Se esse tratamento estiver no meio de componentes ou funções de armazenamento de estado, pode gerar um código acoplado com as regras da dos dados da camada de Persistência, nesse caso a API.

Se amanhã a API mudar seu padrão, isso impactará no código de componentes ou funções. Outro problema é, no caso do campo "email", se o backend mudar de string vazia para um null, por exemplo, precisaríamos procurar em todos os pontos que estamos fazendo essa validação e mudar.

Esse é um exemplo básico, mas imagine tratamentos para 20 campos diferentes e mais complexos.

Outro exemplo, mas agora com um envio de dados para API. 

É comum termos que montar o body para um POST com algo assim:

```javascript
const body = {
  name: props.name,
  user_id: props.userId,
  user_email: props.userEmail
}
```


A abordagem atual pode tornar nosso código mais confuso, especialmente se precisarmos repetir frequentemente a montagem do corpo da requisição. Além disso, qualquer mudança nos campos do backend exigirá uma revisão extensa do código, resultando em retrabalho. A solução ideal é centralizar esse tipo de tratamento, o que simplifica a manutenção e reduz a probabilidade de erros futuros.

## A Solução
Centralizar o tratamento de dados em aquivo de Data Mapper para cada contexto.

Implementação:
Uma abordagem comum é colocar os Data Mappers próximos à camada de Persistência, como nas services que interagem com as APIs. 

Por exemplo, considere a seguinte estrutura de pastas:

```txt
src/
├── services/
   └── services.js
   └── mappers/
       └── userInfoMapper.js
```

Cada mapper é uma função que recebe um único objeto e retorna outro objeto, aplicando as transformações necessárias. 

Criando o método para trabalhar com um GET:

```javascript
class UserinfoMapper {
  static toDomain
}
```


Basicamente, a gente receberá o formato vindo da API e retornaremos no formato adequeado para o frontend.

O quanto mais próximo esse tratamento ficar da services, melhor. 

Exemplo da montagem da service:

```ts

```


Nesse cenário, os dados retornados pela API já estarão tratados e prontos para serem utilizados em qualquer parte da aplicação. Caso o padrão da API seja modificado, será necessário efetuar a alteração em apenas um arquivo. 

O mesmo princípio se aplica aos dados enviados em uma requisição POST, exemplo:

```ts

```


Service:
```ts

```


## Conclusão
O Data Mapper Pattern no frontend é uma técnica poderosa para manter a separação de preocupações entre as camadas de Domínio e Persistência. Ao centralizar o tratamento dos dados, ele torna o código mais modular, fácil de entender e menos suscetível a mudanças na camada de Persistência. Incorporar Data Mappers em sua arquitetura frontend pode melhorar significativamente a qualidade e a manutenibilidade da sua aplicação.



