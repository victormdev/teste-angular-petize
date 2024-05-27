# TesteAngularPetize - Especificações do projeto

Versão do Angular: 17.3.8
Versão do Node: 20.11.1


Esse projeto foi realizado com [Angular CLI](https://github.com/angular/angular-cli) versão 17.3.8. 

Observações iniciais: Como comecei o desenvolvimento há poucas horas, não deu pra finalizar. 
O Angular 17 teve algumas mudanças nas sintaxes, mas encontrei um erro que não consegui sanar, mesmo sabendo a causa e feita a implementação, não funcionou e não tive tempo pra investigar melhor. 
O erro em si foi o `profile.component.html:57 NG0303: Can't bind to 'ngForOf' since it isn't a known property of 'div' (used in the '_ProfileComponent' component template).`. A solução seria declarar o CommonModule, mas mesmo assim não resolveu.
Mas pela arquitetura que fiz já dá pra ter uma boa noção da minha proficiência com Angular.

## Servidor de desenvolvimento

Para rodar o projeto, use `ng serve`. O ambiente irá rodar em `http://localhost:4200/`.
Para instalar as dependências, basta utilizar o comando `npm install` na raiz do projeto.

Demais observações:
Usei CSS puro para mostrar as minhas habilidades de estilização, mas não deu pra aplicar a responsividade.
Dividi a arquitetura em rotas, `home`e `profile`. Utilizadas para pesquisa e mostrar os dados do usuário, respectivamente. Também criei um service para o usuário e usei a pasta environments pra guardar as variáveis das requisições (URL etc)
Usei apenas dependências nativas do Angular, hoje em dia ele já é bem completo para um desenvolvimento robusto.
Também fiz a extração dos ícones do protótipo para deixar bem semelhante.
