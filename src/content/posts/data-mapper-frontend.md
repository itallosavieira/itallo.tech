---
title: 'Data Mapper Pattern no Frontend'
date: '04/23/2024'
category: 'patterns'
---

## A Definição:
O **Data Mapper Pattern** é uma técnica fundamental para a transferência eficiente e bidirecional de dados entre a camada de Domínio e a camada de Persistência.

Parece que é uma coisa super complicada, mas é bem simples: esse padrão garante que as camadas sejam independentes em relação a padronização de dados.

![](/posts/data-mapper-01.png)

Aplicado ao Frontend, vamos considerar camadas de **Domínio** e **Persistência** da seguinte forma:

![](/posts/data-mapper-02.png)

Cada camada tem seu padrão de dados. Quando o frontend precisa se comunicar com uma API, é necessário tratar esses dados. O Data Mapper Pattern faz essa ponte entre Domínio e Persistência, na recepção e no envio (bidirecional) de dados. Isso torna cada camada independente da outra.

![](/posts/data-mapper-03.png)

## O Problema:
Na comunicação entre Frontend e API, pode ser necessário manipular dados para que fiquem com o padrão esperado pela API. Qualquer mudança no formato dos dados na camada de Persistência pode resultar em uma cascata de atualizações em vários pontos do código, tornando a aplicação difícil de manter.

Por exemplo, se precisamos fazer um GET de informações de um usuário, mas a API usa snake_case, como "user_id":

```json
{
  "name": "Itallo Sá Vieira",
  "user_id": "123",
  "email": "",
}
```

Se o padrão no frontend for camelCase, será necessário converter "user_id" para "userID". Se esse tratamento estiver no meio de componentes ou actions, vai gerar um código acoplado com as regras da camada de Persistência, nesse caso a API.

Se a API mudar seu padrão, isso impactará no código de componentes ou funções. Outro problema é, no caso do campo "email", se o backend mudar de string vazia para um null, precisaríamos atualizar todos os pontos onde fazemos essa validação.

Esse é um exemplo básico, mas imagine tratamentos para 20 campos diferentes e mais complexos.

Outro exemplo, agora com um envio de dados para API. É comum termos que montar o body para um POST assim:

```javascript
const body = {
  user_name: props.name,
  user_id: props.userId,
  user_email: props.userEmail
}
```

Essa abordagem torna o código confuso, especialmente se precisarmos repetir a montagem do corpo da requisição frequentemente. Qualquer mudança nos campos do backend vai exigir uma revisão extensa do código, resultando em retrabalho. A solução ideal é centralizar esse tipo de tratamento, simplificando a manutenção e reduzindo a probabilidade de erros futuros.

## A Solução
Centralizar o tratamento de dados em um arquivo de Data Mapper para cada contexto.

## Implementação:
Uma abordagem comum é colocar os Data Mappers próximos à camada de Persistência, como nas services que interagem com as APIs. 

Por exemplo, considere a seguinte estrutura de pastas:

```txt
src/
├── services/
   └── services.js
   └── mappers/
       └── userInfoMapper.js
```

Cada mapper é uma função que recebe um único objeto e retorna outro, aplicando as transformações necessárias. 

Criando o método para trabalhar com um GET:

```javascript
class UserInfoMapper {
  static toDomain(persistenceData) {
    const { user_name, user_id, user_email } = persistenceData;
    return {
      user: {
        name: user_name,
        id: user_id,
        email: user_email
      }
    }
  }
}
```

Recebemos o formato da API e retornaremos no formato adequeado para o frontend.

Eu gosto de deixar esse tratamento o mais próximo das services.

Exemplo da montagem da service:

```javascript
getUserInfo: async () => {
  const { data } = await http.get('/');
  return UserInfoMapper.toDomain(data);
}
```

Os dados retornados pela API já estarão tratados e prontos para uso na aplicação. Se o padrão da API for modificado, será necessário alterar apenas um arquivo. 

O mesmo princípio se aplica aos dados enviados em uma requisição POST, exemplo:

```javascript
class UserInfoMapper {
  // static toDomain...

  static toPersistence(domainData) {
    const user = domainData;
    return {
      user_name: user.name,
      user_id: user.id,
      user_email: user.email,
    }
  }
}
```

Service:

```javascript
sendUserInfo: async (obj) => {
  const body = UserInfoMapper.toPersistence(obj);
  return await http.post('/', body);
}
```

## Conclusão
O Data Mapper Pattern no frontend é uma técnica muito útil para manter a separação de responsabilidades entre as camadas de Domínio e Persistência. Centralizando o tratamento dos dados, o código fica mais modular, fácil de entender e menos suscetível a erros e independente de camadas externas. Incorporar Data Mappers na arquitetura frontend aumentará a qualidade e a facilidade de manutenção da aplicação.
