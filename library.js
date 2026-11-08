let formBook = document.getElementById("form");
let book = document.getElementById("book");

const books = [];

formBook.addEventListener("submit", keep);

function keep(e) {
    e.preventDefault();

    let libraryBook = book.value.trim();

    const enterBook = {
        libro: libraryBook
    }

    books.push(enterBook);
    console.log(books);
}

let formBook2 = document.getElementById("formBook");
let find = document.getElementById("find");
let liResult = document.createElement("li");
let divResult = document.getElementById("result");
divResult.append(liResult);

formBook2.addEventListener("submit", look);

function look(e) {
    e.preventDefault();

    for (const enterBook of books) {
        if (find.libro === enterBook.libro) liResult.textContent = "Libro disponible";
        else  liResult.textContent = "Libro no disponible";
    }
}