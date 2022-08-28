# Extra: Quadro de Medalhas

## Introdução

Nessa atividade, você vai construir um quadro para exibir as medalhas dos 15 países que mais tiveram vitórias nas competições das Olimpíadas.

Sua aplicação irá exibir a quantidade de medalhas de ouro, prata e bronze de cada país, além da soma total de totas as medalhas!

Você pode utilizar o seguinte layout como base para a estilização do seu app. [Clique aqui](https://www.figma.com/file/9ck8OxFkUTtx2DBtzffO4L/M2---Sprint1---Olimp%C3%ADadas-HTML---CSS---JS?node-id=0%3A1) para acessar o figma!

Veja um preview abaixo:

<figure>
    <img src="./src/img/Home.png" alt="Preview layout">
</figure>

## Tarefas

Para iniciar, clone esse repositório.

Utilize o seguinte endpoint para realizar o fetch e recuperar as informações de cada país: **https://kenzie-olympics.herokuapp.com/paises**

Para a construção dessa aplicação, você terá algumas tarefas a cumprir. Você precisará implementar as seguintes funcionalidades:

1. Utilizar o fetch para recuperar a quantidade de medalhas de cada país;
2. Tratar os dados e utilizar o DOM para contruir a tabela;
3. Implementar um filtro por nome de país através de um campo de busca;
4. Implementar diferentes formas de ordenação, a partir do clique no título da coluna:
   - Por padrão, a ordenação será feita pela posição do país no ranking. — A posição será calculada a partir do total de medalhas, caso haja empate entre os países, o desempate será feito pela quantidade de medalhas de ouro;
   - Ordenação pela quantidade de medalhas de ouro;
   - Ordenação pela quantidade de medalhas de prata;
   - Ordenação pela quantidade de medalhas de bronze;
   - Voltar a ordenação padrão, ou seja, pela posição no ranking.

## Bônus

> **Importante!**
> 
> Por ser uma parte Bônus dessa entrega, ela não é **Obrigatória**. Sendo assim, é aceitável que tenha um nível de dificuldade maior.

Para melhorar seu conhecimento e aprendizagem com o POO, que tal refatorar essa entrega e utilizar seus conceitos, criando assim classes que possam ser reutilizadas?

Iniciar do zero seria a melhor forma, caso ainda não tenha começado, mas aqui estão algumas dicas:

- Inicie pela desconstrução da sua classe, ou seja, quais são as suas características (atributos ou propriedades) e o que pode fazer (métodos ou funções).
- Utilize Boas práticas que lhe foram passadas durante o módulo.
- Quais serão suas funcionalidades e como elas irão interagir entre si e seus dados.

## Entrega

Faça o push do código para o seu repositório GitHub e implemente-o
GitHub pages. Coloque seu repositório como **Privado** e adicione em
**Configurações > Colaboradores e Times** o time **team-m2-correcoes**. No
Canvas, por favor, envie sua url do GitHub Pages: (ex:
https://nomedeusuario.github.io/oregon-trail-inheritance) e envie o link
do seu repositório nos comentários.
