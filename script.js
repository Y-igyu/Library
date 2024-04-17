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

const newBook = document.querySelector("#newBook");

newBook.addEventListener("click", () => {
  console.log("clicked");
});
