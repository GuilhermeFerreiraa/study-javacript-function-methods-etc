/*
    ### Buscando e contando dados em Array 

    Baseado no Array de Livros por Categoria abaixo, faça os seguintes desafios

        * Contar o número de categorias e o numero de livros em cada categoria
        * Contar o numero de autores
        * Mostrar livros do autor Augusto cury
        * Transformar a função acima em uma função que irá receber o nome do autor e devolver os livros desse autor.
        */

    const booksByCateogory = [
{ 
        category: "Riqueza",
        books: [
            {
                title: "Os segredos da mente Milionaria",
                author:"T. Harv Eker"
            },
            { 
                title: "O homem mais rico da Babilônia",
            author:"George S. Clason",
        },
        { 
            title: "Pai Rico, Pai Pobre",
        author:"Robert T. Kiyosaki e Sharon L. Lechter",
        }
    ],
},

{ 
    category: "Inteligência Emocional",
    books:[
        {
            title: "Você é Insubstituível",
            author:"Augusto Cury"
        },
        { 
            title: "Ansiedade - Como enfrentar o mal do século",
            author:"Augusto Cury",
        },
        { 
           title: "Os 7 Hábitos das pessoas altamente eficazes",
           author:"Stephen R. Covey",
        },
        { 
            title: "Os 7 Hábitos das pessoas altamente eficazes",
            author:"Stephen R. Covey",
         }
    ],
}
];
const totalCategories = booksByCateogory.length
console.log('Número total de categorias: ',totalCategories);
for (let category of booksByCateogory){
    console.log('Quantidade de livros da Categoria ' + category.category);
    console.log(category.books.length)
}


function countAuthors(){
    let authors = [];

    for(let category of booksByCateogory){
        for (let book of category.books) {
            if(authors.indexOf(book.author) == -1){
                authors.push(book.title)
            }
        }
    }
    console.log("Total de autores: ",authors.length)
}




function booksOfAuthor(author) {
    let books = [];

    for(let category of booksByCateogory) {
        for(let book of category.books) {
            if(book.author === author) {
                books.push(book.title)
          }
        }
     }
        
     console.log(`Livros do Autor ${author}: ${books.join(", ")}`)
}
booksOfAuthor('Stephen R. Covey')
booksOfAuthor('Augusto Cury')
booksOfAuthor('Robert T. Kiyosaki e Sharon L. Lechter')


