#Minha Estrutura TypeScript 2023

###Estrutura de projeto TypeScript
Basta clonar o projeto e executar o comando abaixo para instalar as dependências.

```bash
yarn
```
###Arvore do projeto
```bash
└───src
    ├───config
    │       app.ts
    │
    ├───database
    ├───modules
    │   ├───roles
    │   │       roles.controller.ts
    │   │       roles.service.ts
    │   │
    │   └───users
    │           users.controller.ts
    │           users.service.ts
    │
    └───shared
        ├───errors
        │       AppError.ts
        │
        └───http
            │   server.ts
            │
            └───routes
                    index.ts
                    roles.routes.ts
                    users.routes.ts
```

> src: Pasta raiz do projeto
>
> config: app.ts arquivo de configuração do projeto
>
> database: Pasta para armazenar as configurações do banco de dados
>
> config: Pasta para armazenar as configurações do projeto
>
> modules: Pasta para armazenar os módulos do projeto
>
> roles: Pasta para armazenar os módulos de roles
>
> users: Pasta para armazenar os módulos de users
>
> shared: Pasta para armazenar os módulos compartilhados
>
> errors: Pasta para armazenar os erros
>
> http: Pasta para armazenar as configurações de http
>
> routes: Pasta para armazenar as rotas
>
> server.ts: Arquivo principal do projeto

##Arquivos de Rotas

O arquivo de rotas é responsável por receber as requisições e direcionar para o controller correto que por sua vez irá chamar o service e por fim o repository.

###Rotas
```bash
└───src
    └───shared
        └───http
            └───routes
                ├───index.ts
                └───roles.routes.ts
                └───users.routes.ts
```

##Arquivos de Controllers e Services

O arquivo de controllers é responsável por receber as requisições e direcionar para o service correto que por sua vez irá chamar o repository.
O arquivo de services é responsável por receber as requisições e direcionar para o repository correto que por sua vez irá chamar o banco de dados.

###Controllers e Services
```bash
└───src
    └───modules
        └───roles
        │   └───roles.controller.ts
            └───roles.service.ts
        └───users
        │   └───users.controller.ts
            └───users.service.ts
```



<h6>Donate</h6>
![Created By](https://hangell.org/wp-content/uploads/2022/04/rodrigorangel.jpeg)
<p>Pix: <b style="color: green;">rodrigo@hangell.org</b></p>
<p>Cryptocurrencies or nft MetaMask: <b style="color: green;"><small>0xEd4d1be72F807Faa358C966a8eF63367c200130F</small></b></p>


<div>
<a href="https://hangell.org" target="_blank"><img src="https://img.shields.io/badge/website-000000?style=for-the-badge&logo=About.me&logoColor=white" target="_blank"></a>
  <a href="https://play.google.com/store/apps/dev?id=5606456325281613718" target="_blank"><img src="https://img.shields.io/badge/Google_Play-414141?style=for-the-badge&logo=google-play&logoColor=white" target="_blank"></a>
  <a href="https://www.youtube.com/channel/UC8_zG7RFM2aMhI-p-6zmixw" target="_blank"><img src="https://img.shields.io/badge/YouTube-FF0000?style=for-the-badge&logo=youtube&logoColor=white" target="_blank"></a>
  <a href="https://www.facebook.com/hangell.org" target="_blank"><img src="	https://img.shields.io/badge/Facebook-1877F2?style=for-the-badge&logo=facebook&logoColor=white" target="_blank"></a>
  <a href="https://www.linkedin.com/in/rodrigo-rangel-a80810170" target="_blank"><img src="https://img.shields.io/badge/-LinkedIn-%230077B5?style=for-the-badge&logo=linkedin&logoColor=white" target="_blank"></a>

</div>
