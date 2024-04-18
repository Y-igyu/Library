const myLibrary = [];

// same as --function Book(){this.title: etc.}
class Book {
  constructor(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
  }
}

function addBookToLibrary() {
  // stuff
}

const dialog = document.querySelector("#bookInfo");
const newBook = document.querySelector("#newBook");
const addBook = document.querySelector("#addBook");

newBook.addEventListener("click", () => {
  dialog.showModal();
});

addBook.addEventListener("click", () => {
  dialog.close();
});
